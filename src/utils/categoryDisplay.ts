import { Category } from "@prisma/client";

export function categoryDisplay(isShooted: boolean, category?: Category) {
  return isShooted
    ? "Расстрелянные"
    : category === "DISPOSSESSED"
      ? "Раскулаченный"
      : "Репрессированный";
}
