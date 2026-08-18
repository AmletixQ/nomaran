import { cache } from "react";
import prisma from "./prisma";

export function parseVictimId(raw: string) {
  const id = Number(raw);
  if (!Number.isInteger(id) || id <= 0) return null;
  return id;
}

export const getVictimById = cache(async (id: number) => {
  return prisma.victim.findUnique({ where: { id } });
});
