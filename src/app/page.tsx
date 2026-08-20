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
    <main className="relative flex min-h-dvh flex-col items-center justify-center gap-6">
      <div className="absolute inset-0 -z-20 bg-[url(../../public/images/backgrounds/hero-bg.webp)] bg-contain bg-no-repeat md:bg-cover md:bg-fixed" />

      <div className="flex w-[95%] flex-col items-center justify-center gap-6 lg:px-12">
        <Links className="text-[20px] md:hidden" />
        <SearchAnchorButton className="text-[20px] md:hidden" />
      </div>
    </main>
  );
}
