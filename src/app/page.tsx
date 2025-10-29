import Links from "@/components/Links";
import SearchAnchorButton from "@/components/SearchAnchorButton";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 pt-30 lg:px-12">
      <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(/images/hero-bg.jpg)] bg-contain bg-no-repeat md:bg-cover md:bg-fixed" />

      <Links className="text-[20px] md:hidden" />
      <SearchAnchorButton className="text-[20px] md:hidden" />
    </main>
  );
}
