import { Category } from "@prisma/client";

export function categoryDisplay(isShooted: boolean, category?: Category) {
  return isShooted
    ? "Расстрелянные"
    : category === "DISPOSSESSED"
      ? "Раскулаченные"
      : category === "NATATTRIBUTE"
        ? "Репрессированные по нац.признаку"
        : "ИТЛ, тюремные заключения, ссылки";
}
