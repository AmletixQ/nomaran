import { ITLS } from "@/constants/itls";
import { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/utils/seo";

export const metadata: Metadata = pageMetadata({
  title: "Список ИТЛ",
  description:
    "Список исправительно-трудовых лагерей (ИТЛ), упоминаемых в материалах о жертвах политических репрессий Северо-Осетинской АССР.",
  path: "/itls",
  keywords: ["ИТЛ", "исправительно-трудовые лагеря", "номаран", "репрессии"],
});

export default function page() {
  return (
    <main className="flex flex-col gap-7.5 pt-[calc(var(--header-height)/3)] pb-25 2xl:mx-25 2xl:gap-15 2xl:pb-80">
      <h1 className="page-title">Список ИТЛ</h1>
      <ul className="flex flex-col gap-5">
        {ITLS.map((itl, i) => (
          <li
            key={i}
            className="flex list-none items-center gap-2.5 border-b border-black/20 pb-1.5"
          >
            <Image
              src="/images/star.png"
              alt=""
              width="20"
              height="18"
            />
            <p className="2xl:text-[22px]">{itl}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
