import { ITLS } from "@/constants/itls";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="flex flex-col gap-15 pt-25">
      <h2>Список аббревиатур</h2>
      <ul className="flex flex-col gap-6">
        {ITLS.map((itl, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 list-none border-b border-black/20 pb-1.5 text-[22px]"
          >
            <Image
              src="/images/star.png"
              alt="star itl"
              width="32"
              height="28"
            />
            <p>{itl}</p>
          </div>
        ))}
      </ul>
    </main>
  );
}
