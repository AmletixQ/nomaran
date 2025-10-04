"use client";
import Cross from "./icons/Cross";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResetButton() {
  const router = useRouter();
  const params = useSearchParams();

  console.log();

  return (
    params.toString() !== "" && (
      <button
        onClick={() => router.push("/")}
        type="button"
        className="cursor-pointer"
      >
        <Cross />
      </button>
    )
  );
}
