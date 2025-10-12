"use client";
import { useRouter } from "next/navigation";
import Arrow from "../icons/Arrow";

export default function Backlink() {
  const router = useRouter();
  return (
    <button className="flex items-center gap-2.5 cursor-pointer opacity-60" onClick={() => router.back()}>
      <Arrow /> <p>вернуться назад</p>
    </button>
  );
}
