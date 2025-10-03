import { unstable_cache } from "next/cache";
import prisma from "./prisma";

export async function getCachedVictims(query: string, filters: string[]) {
  const cacheKey = `victims_${query}_${filters.join("_")}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = {};

  if (query) {
    where.OR = [
      { fullname: { contains: query, mode: "insensitive" } },
      { birthPlace: { contains: query, mode: "insensitive" } },
      { national: { contains: query, mode: "insensitive" } },
      { otherData: { contains: query, mode: "insensitive" } },
    ];
  }

  if (filters.length > 0 && !filters.includes("all")) {
    where.category = { in: [] };
    if (filters.includes("repressed_nat_attribute")) {
      where.category.in.push("NATATTRIBUTE");
    }
    if (filters.includes("repressed")) {
      where.category.in.push("REPRESSED");
    }
    if (filters.includes("dispossessed")) {
      where.category.in.push("DISPOSSESSED");
    }
  }

  return unstable_cache(
    async () => {
      return await prisma.victim.findMany({ where, take: 15 });
    },
    [cacheKey],
    { revalidate: 900, tags: ["victims", cacheKey] },
  )();
}
