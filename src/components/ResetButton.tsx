"use client";
import Cross from "./icons/Cross";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResetButton() {
  const router = useRouter();
  const params = useSearchParams();

  function handleClick() {
    router.push("/search");
  }

  return (
    params.toString() !== "" && (
      <button onClick={handleClick} type="button" className="cursor-pointer">
        <Cross />
      </button>
    )
  );
}
