"use client";
import { categoryDisplay } from "@/utils/categoryDisplay";
import { Category } from "@prisma/client";

export default function VictimCategory({ category }: { category?: Category }) {
  return (
    <div className="flex items-center gap-2.5">
      <h6 className="md:text-[18px]">Категория:</h6>
      <p>{categoryDisplay(category)}</p>
    </div>
  );
}
