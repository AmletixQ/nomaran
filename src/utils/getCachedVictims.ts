import { unstable_cache } from "next/cache";
import prisma from "./prisma";
import { Prisma } from "@prisma/client";
import { NATIONALS } from "@/constants/nationals";

export async function getCachedVictims(query: string, filters: string[]) {
  const cacheKey = `victims_${query}_${filters.join("_")}`;
  const where: Prisma.VictimWhereInput = {};

  if (query) {
    where.OR = [{ fullname: { contains: query, mode: "insensitive" } }];

    if (+query) where.OR.push({ birthYear: { equals: parseInt(query) } });
    if (NATIONALS.includes(query.toLowerCase()))
      where.OR.push({ national: { contains: query, mode: "insensitive" } });

    where.OR.push({ birthPlace: { contains: query, mode: "insensitive" } });
  }

  console.log(where.OR);

  if (filters.length > 0 && !filters.includes("all")) {
    where.category = { in: [] };
    console.log("workedQ");

    if (!where.category.in || !Array.isArray(where.category.in)) {
      console.log("Not array!");
      return;
    }

    if (filters.includes("list-of-itl")) {
      where.category.in.push("REPRESSED");
    }
    if (filters.includes("list-of-shooted")) {
      where.category.in.push("REPRESSED");
      where.OR?.push({
        otherData: { contains: "расстрел", mode: "insensitive" },
      });
    }
    if (filters.includes("repressed-nat-attribute")) {
      where.category.in.push("NATATTRIBUTE");
    }
    if (filters.includes("list-of-dispossessed")) {
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
