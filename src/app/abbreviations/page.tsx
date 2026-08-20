import { ABBREVIATIONS } from "@/constants/abbreviations";
import { Metadata } from "next";
import { pageMetadata } from "@/utils/seo";

export const metadata: Metadata = pageMetadata({
  title: "Список аббревиатур",
  description:
    "Расшифровка аббревиатур, используемых в Книге Памяти и на сайте ассоциации «Номаран».",
  path: "/abbreviations",
  keywords: ["аббревиатуры", "список аббревиатур", "номаран", "репрессии"],
});

export default function page() {
  return (
    <main className="mx-auto flex w-[95%] flex-col gap-7.5 pt-[calc(var(--header-height)/3)] pb-25 2xl:gap-15 2xl:pb-80">
      <h1 className="page-title">Список аббревиатур</h1>
      <ul className="flex flex-col gap-5 2xl:gap-6">
        {ABBREVIATIONS.map((abbr, i) => (
          <li
            key={i}
            className="list-none border-b border-black/20 pb-1.5 2xl:text-[22px]"
          >
            {abbr}
          </li>
        ))}
      </ul>
    </main>
  );
}
