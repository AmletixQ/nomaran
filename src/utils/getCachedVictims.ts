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
    const queryParts = query.split(/[\s,]+/).filter((q) => q.trim() !== "");
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

  if (filters.length > 0 && !filters.includes("all")) {
    const categoryConditions: Prisma.Sql[] = [];

    if (filters.includes("list-of-itl"))
      categoryConditions.push(Prisma.sql`category = 'REPRESSED'`);

    if (filters.includes("list-of-shooted"))
      categoryConditions.push(
        Prisma.sql`(category = 'REPRESSED' AND (lower("other_data") LIKE '%расстр%' OR lower("other_data") LIKE '%вмн%'))`,
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

  let cteClause = Prisma.empty;
  let minDistanceSelect = Prisma.empty;
  let orderByClause = Prisma.sql`ORDER BY "fullname" ASC`;

  if (stringParts.length > 0) {
    const allText = Prisma.sql`
      LOWER("fullname") || ' ' ||
      COALESCE(LOWER("birth_place"), '') || ' ' ||
      COALESCE(LOWER("other_data"), '') || ' ' ||
      COALESCE(LOWER("national"), '')
    `;
    const words = Prisma.sql`STRING_TO_ARRAY(${allText}, ' ')`;
    const queryValues = Prisma.join(
      stringParts.map((p) => Prisma.sql`(${p})`),
      ", ",
    );

    minDistanceSelect = Prisma.sql`, (
      SELECT MIN(LEVENSHTEIN(word, LOWER(q.part)))
      FROM UNNEST(${words}) AS word
      CROSS JOIN (VALUES ${queryValues}) AS q(part)
      WHERE LEVENSHTEIN(word, q.part) <= 2
    ) AS min_distance
    `;

    cteClause = Prisma.sql`
      WITH victims_with_distance AS (
        SELECT
          *
          ${minDistanceSelect}
        FROM "victims"
        ${whereClause}
      )
    `;

    orderByClause = Prisma.sql`ORDER BY min_distance ASC, "fullname" ASC`;
  } else {
    cteClause = Prisma.sql`
      WITH victims_with_distance AS (
        SELECT *, NULL::int AS min_distance
        FROM "victims"
        ${whereClause}
      )
    `;
  }

  const sql = Prisma.sql`
    ${cteClause}
    SELECT *
    FROM victims_with_distance
    WHERE min_distance IS NOT NULL OR ${stringParts.length === 0}::boolean
    ${orderByClause}
    LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}
  `;

  // console.log("SQL:", sql.strings.join("?"));

  const rawVictims = await unstable_cache(
    async () => {
      return prisma.$queryRaw<(Victim & { min_distance: number })[]>`${sql}`;
    },
    [cacheKey],
    { revalidate: 900, tags: ["victims", cacheKey] },
  )();

  const victims = rawVictims.map(mapRawVictim);

  const countSql = Prisma.sql`
    ${cteClause}
    SELECT COUNT(*) AS count
    FROM victims_with_distance
    WHERE min_distance IS NOT NULL OR ${stringParts.length === 0}::boolean
  `;

  const totalResult = await prisma.$queryRaw<{ count: bigint }[]>`${countSql}`;
  const total = Number(totalResult[0].count || 0);

  return { victims, total };
}
