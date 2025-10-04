import { unstable_cache } from "next/cache";
import prisma from "./prisma";
import { Prisma } from "@prisma/client";
import { NATIONALS } from "@/constants/nationals";

export async function getCachedVictims(
  query: string,
  filters: string[],
  page: number,
  pageSize: number = 15,
) {
  const cacheKey = `victims_${query}_${filters.join("_")}_page_${page}`;
  const where: Prisma.VictimWhereInput = {};

  if (query) {
    const queryParts = query.split(/[\s,]/).filter((q) => q.trim() !== "");

    where.OR = [];
    queryParts.forEach((part) => {
      const trimmedPart = part.trim();
      const isNumber = !isNaN(Number(trimmedPart)) && trimmedPart !== "";

      if (NATIONALS.includes(trimmedPart.toLowerCase()))
        where.OR?.push({
          national: { contains: trimmedPart, mode: "insensitive" },
        });

      if (isNumber) {
        const year = Number(trimmedPart);
        where.OR?.push({ birthYear: year });
      } else {
        where.OR?.push(
          { fullname: { contains: trimmedPart, mode: "insensitive" } },
          { birthPlace: { contains: trimmedPart, mode: "insensitive" } },
          { otherData: { contains: trimmedPart, mode: "insensitive" } },
        );
      }
    });

    where.OR = where.OR.filter(
      (condition: Record<string, unknown>) =>
        condition[Object.keys(condition)[0]] !== null &&
        condition[Object.keys(condition)[0]] !== undefined,
    );

    if (where.OR.length === 0) {
      delete where.OR;
    }
  }

  if (filters.length > 0 && !filters.includes("all")) {
    where.category = { in: [] };

    if (!where.category.in || !Array.isArray(where.category.in)) {
      return;
    }

    if (filters.includes("list-of-itl")) {
      where.category.in.push("REPRESSED");
    }
    if (filters.includes("list-of-shooted")) {
      where.category.in.push("REPRESSED");
      where.otherData = {
        contains: "расстрел",
        mode: "insensitive",
      };
    }
    if (filters.includes("repressed-nat-attribute")) {
      where.category.in.push("NATATTRIBUTE");
    }
    if (filters.includes("list-of-dispossessed")) {
      where.category.in.push("DISPOSSESSED");
    }
  }

  const [victims, total] = await Promise.all([
    unstable_cache(
      async () => {
        return await prisma.victim.findMany({
          where: {
            AND: where,
          },
          take: pageSize,
          skip: (page - 1) * pageSize
        });
      },
      [cacheKey],
      { revalidate: 900, tags: ["victims", cacheKey] },
    )(),
    prisma.victim.count({ where }),
  ]);

  return { victims, total };
}
