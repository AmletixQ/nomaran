import Image from "next/image";
import Links from "@/components/Links";
import SearchAnchorButton from "@/components/SearchAnchorButton";
import { Metadata } from "next";
import { pageMetadata } from "@/utils/seo";
import {
  defaultDescription,
  defaultKeywords,
  siteName,
} from "@/constants/config";

export const metadata: Metadata = {
  ...pageMetadata({
    title: siteName,
    description: defaultDescription,
    path: "/",
    keywords: defaultKeywords,
    absolute: true,
  }),
};

export default async function Home() {
  return (
    <main className="-mt-(--header-height) flex min-h-screen flex-col items-center justify-center gap-6 lg:px-12">
      <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(../../public/images/backgrounds/hero-bg.jpg)] bg-contain bg-no-repeat md:bg-cover md:bg-fixed" />

      {/* <div className="flex h-full flex-col items-center justify-center rounded-lg bg-black/20 p-2 text-white">
        <h1 className="max-w-4xl px-4 text-center">Номаран – Память Имен</h1>
        <p className="max-w-2xl px-4 text-center leading-[140%]">
          База данных о людях, пострадавших от политических репрессий в
          Северо-Осетинской АССР. Поиск по имени, году рождения и категории.
        </p>
      </div> */}

      <Links className="text-[20px] md:hidden" />
      <SearchAnchorButton className="text-[20px] md:hidden" />
    </main>
  );
}
