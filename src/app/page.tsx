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
      <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(../../public/images/backgrounds/hero-bg.webp)] bg-contain bg-no-repeat md:bg-cover md:bg-fixed" />

      <Links className="text-[20px] md:hidden" />
      <SearchAnchorButton className="text-[20px] md:hidden" />
    </main>
  );
}
