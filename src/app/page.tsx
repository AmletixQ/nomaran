import Links from "@/components/Links";
import SearchAnchorButton from "@/components/SearchAnchorButton";
import { Metadata } from "next";

// import backgroundImage from "../../public";

export const metadata: Metadata = {
  title: "Номаран – Память Имен",
  description:
    "Северо-Осетинская региональная общественная организация «Ассоциация жертв политических репрессий «Номаран (Память Имен)»».",
  keywords: [
    "номаран",
    "аузби зураев",
    "ассоциация жертв политических репрессий",
    "память имен",
    "жертвы репрессий северная осетия",
    "репрессированные северная осетия",
    "политические репрессии северная осетия",
    "реабилитация репрессированных северная осетия",
  ],
  openGraph: {
    title: "Номаран – Память Имен",
    description:
      "Северо-Осетинская региональная общественная организация «Ассоциация жертв политических репрессий «Номаран (Память Имен)»».",
    images: ["https://nomaran.ru/og-image.jpg"],
  },
  twitter: {
    title: "Номаран – Память Имен",
    description:
      "Северо-Осетинская региональная общественная организация «Ассоциация жертв политических репрессий «Номаран (Память Имен)»».",
    images: ["https://nomaran.ru/og-image.jpg"],
  },
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 pt-30 lg:px-12">
      <div
        className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(../../public/images/backgrounds/hero-bg.jpg)] bg-contain bg-no-repeat md:bg-cover md:bg-fixed"
      />

      <Links className="text-[20px] md:hidden" />
      <SearchAnchorButton className="text-[20px] md:hidden" />
    </main>
  );
}
