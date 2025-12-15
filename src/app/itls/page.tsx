import { ITLS } from "@/constants/itls";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Список ИТЛ",
  description: "Список исправительно-трудовых лагерей (ИТЛ)",
  keywords: ["ИТЛ", "исправительно-трудовые лагеря", "номаран", "репрессии"],
  openGraph: {
    title: "Список ИТЛ",
    description: "Список исправительно-трудовых лагерей (ИТЛ)",
    images: ["/og-image.jpg"],
  },
  twitter: {
    title: "Список ИТЛ",
    description: "Список исправительно-трудовых лагерей (ИТЛ)",
    images: ["/og-image.jpg"],
  },
};

export default function page() {
  return (
    <main className="flex flex-col gap-7.5 pt-40 pb-25 md:pt-50 2xl:mx-25 2xl:gap-15 2xl:py-80">
      <h2>Список ИТЛ</h2>
      <ul className="flex flex-col gap-5">
        {ITLS.map((itl, i) => (
          <div
            key={i}
            className="flex list-none items-center gap-2.5 border-b border-black/20 pb-1.5 text-[22px]"
          >
            <Image
              src="/images/star.png"
              alt="star itl"
              width="20"
              height="18"
            />
            <p>{itl}</p>
          </div>
        ))}
      </ul>
    </main>
  );
}
