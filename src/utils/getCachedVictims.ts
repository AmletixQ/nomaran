import { unstable_cache } from "next/cache";
import prisma from "./prisma";
import { Prisma, Victim } from "@prisma/client";
import { mapRawVictim } from "./mapRawVictim";

export async function getCachedVictims(
  query: string,
  filters: string[],
  page: number,
  pageSize: number = 15,
) {
  const cacheKey = `victims_${query}_${filters.join("_")}_page_${page}`;
  const whereConditions: Prisma.Sql[] = [];
  const stringParts: string[] = [];
  const numberParts: number[] = [];

  if (query) {
    const queryParts = query.split(/[\s,]/).filter((q) => q.trim() !== "");
    queryParts.forEach((part) => {
      const trimmedPart = part.trim();
      const isNumber = !isNaN(Number(trimmedPart)) && trimmedPart !== "";

      if (isNumber) numberParts.push(Number(trimmedPart));
      else stringParts.push(trimmedPart);
    });
  }

  if (numberParts.length > 0) {
    const numberConditions: Prisma.Sql[] = numberParts.map(
      (year) => Prisma.sql`"birth_year" = ${year}`,
    );
    whereConditions.push(
      Prisma.sql`(${Prisma.join(numberConditions, " OR ")})`,
    );
  }

  if (stringParts.length > 0) {
    const allWords = Prisma.sql`string_to_array(
      lower("fullname") || ' ' ||
      COALESCE(lower(birth_place), '') || ' ' || 
      COALESCE(lower(national), ''), ' '
    )
    `;

    whereConditions.push(Prisma.sql`
      EXISTS (
        SELECT 1
        FROM unnest(${allWords}) as word
        CROSS JOIN (VALUES ${Prisma.join(
          stringParts.map((p) => Prisma.sql`(${p})`),
          ", ",
        )}) as sp(part)
        WHERE levenshtein(word, sp.part) <= 1
      )
    `);
  }

  if (filters.length > 0 && !filters.includes("all")) {
    const categoryConditions: Prisma.Sql[] = [];

    if (filters.includes("list-of-itl"))
      categoryConditions.push(Prisma.sql`category = 'REPRESSED'`);

    if (filters.includes("list-of-shooted"))
      categoryConditions.push(
        Prisma.sql`(category = 'REPRESSED' AND lower("other_data") LIKE '%расстрел%')`,
      );

    if (filters.includes("repressed-nat-attribute"))
      categoryConditions.push(Prisma.sql`category = 'NATATTRIBUTE'`);

    if (filters.includes("list-of-dispossessed"))
      categoryConditions.push(Prisma.sql`category = 'DISPOSSESSED'`);

    if (categoryConditions.length > 0)
      whereConditions.push(
        Prisma.sql`(${Prisma.join(categoryConditions, " OR ")})`,
      );
  }

  const whereClause =
    whereConditions.length > 0
      ? Prisma.sql`WHERE ${Prisma.join(whereConditions, " AND ")}`
      : Prisma.empty;

  let minDistanceClause = Prisma.empty;
  let orderByClause = Prisma.sql`ORDER BY "id" ASC`;
  if (stringParts.length > 0) {
    const allWords = Prisma.sql`string_to_array(
      lower("fullname") || ' ' ||
      COALESCE(lower(birth_place), '') || ' ' || 
      COALESCE(lower(national), ''), ' '
    )
    `;

    minDistanceClause = Prisma.sql`, (
      SELECT MIN(levenshtein(word, sp.part))
      FROM unnest(${allWords}) as word
      CROSS JOIN (VALUES ${Prisma.join(
        stringParts.map((p) => Prisma.sql`(${p})`),
        ", ",
      )}) as sp(part)
    ) as min_distance
    `;

    orderByClause = Prisma.sql`ORDER BY min_distance ASC, "id" ASC`;
  }

  const rawVictims = await unstable_cache(
    async () => {
      return prisma.$queryRaw<Victim[]>`
        SELECT * ${minDistanceClause}
        FROM "victims"
        ${whereClause}
        ${orderByClause}
        LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}
      `;
    },
    [cacheKey],
    { revalidate: 900, tags: ["victims", cacheKey] },
  )();

  const victims = rawVictims.map(mapRawVictim);

  const totalResult = await prisma.$queryRaw<{ count: bigint }[]>`
    SELECT COUNT(*) as count FROM victims ${whereClause}
  `;

  const total = Number(totalResult[0].count || 0);

  return { victims, total };
}
