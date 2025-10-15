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

  if (query) {
    const queryParts = query.split(/[\s,]/).filter((q) => q.trim() !== "");
    queryParts.forEach((part) => {
      const trimmedPart = part.trim();
      const isNumber = !isNaN(Number(trimmedPart)) && trimmedPart !== "";

      if (isNumber) {
        const year = Number(trimmedPart);
        whereConditions.push(Prisma.sql`"birth_year" = ${year}`);
      } else {
        const trimmedPartReplaced = trimmedPart.replace(/'/g, "''");

        whereConditions.push(Prisma.sql`
          EXISTS (SELECT 1 from unnest(string_to_array(fullname, ' ')) as word WHERE levenshtein(lower(word), ${trimmedPartReplaced}) <= 2) OR
          EXISTS (SELECT 1 FROM unnest(string_to_array(lower("birth_place"), ' ')) AS word WHERE levenshtein(word, ${trimmedPart}) <= 2) OR
          levenshtein(lower(national), ${trimmedPartReplaced}) <= 2
        `);
      }
    });
  }

  if (filters.length > 0 && !filters.includes("all")) {
    const categoryConditions: Prisma.Sql[] = [];

    if (filters.includes("list-of-itl"))
      categoryConditions.push(Prisma.sql`category = 'REPRESSED'`);

    if (filters.includes("list-of-shooted"))
      categoryConditions.push(
        Prisma.sql`(category = 'REPRESSED' AND lower("otherData") LIKE '%расстрел%')`,
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

  const rawVictims = await unstable_cache(
    async () => {
      return prisma.$queryRaw<Victim[]>`
        SELECT * from victims
        ${whereClause}
        LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}
      `;
    },
    [cacheKey],
    { revalidate: 900, tags: ["victims", cacheKey] },
  )();

  const victims = rawVictims.map(mapRawVictim);

  const totalResult = await prisma.$queryRaw<{ count: bigint }[]>`
    SELECT COUNT(*) as count FROM victims ${whereClause};
  `;

  const total = Number(totalResult[0].count || 0);

  return { victims, total };
}
