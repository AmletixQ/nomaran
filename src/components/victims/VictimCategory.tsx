"use client";
import { Category } from "@prisma/client";
import { useSearchParams } from "next/navigation";

export default function VictimCategory({ category }: { category?: Category }) {
  const params = useSearchParams();
  const type = params.get("type");

  const isShooted = type === "shooted";

  return (
    <div className="flex items-center gap-2.5">
      <h6 className="md:text-[18px]">Категория:</h6>
      <p>
        {isShooted
          ? "Высшая мера наказания"
          : category === "DISPOSSESSED"
            ? "Раскулаченный"
            : "Репрессированный"}
      </p>
    </div>
  );
}
