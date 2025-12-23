import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Номаран – Память Имен",
  description:
    "Северо-Осетинская региональная общественная организация «Ассоциация жертв политических репрессий «Номаран (Память Имен)»».",
  keywords: [
    "номаран",
    "аузби зураев",
    "ассоциация жертв политических репрессий",
    "память имен",
    "репрессии осетия",
    "жертвы репрессий северная осетия",
    "репрессированные северная осетия",
    "политические репрессии северная осетия",
    "реабилитация репрессированных северная осетия",
    "СО АССР репрессии"
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body className="mx-auto max-w-[95%]">
        <Header />
        {children}
      </body>
    </html>
  );
}
