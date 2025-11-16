import { Category } from "@prisma/client";

export function categoryDisplay(category?: Category) {
  return category && category === "SHOOTED"
    ? "Расстрелянные"
    : category === "DISPOSSESSED"
      ? "Раскулаченные"
      : category === "NATATTRIBUTE"
        ? "Репрессированные по нац.признаку"
        : "ИТЛ, тюремные заключения, ссылки";
}
