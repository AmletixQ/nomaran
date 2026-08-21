"use client";
import Arrow from "../icons/Arrow";

import { useRouter } from "next/navigation";

export default function Backlink() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="flex cursor-pointer items-center gap-2.5 opacity-60"
      onClick={() => router.back()}
    >
      <Arrow /> <span>вернуться назад</span>
    </button>
  );
}
