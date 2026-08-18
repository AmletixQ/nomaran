import type { Metadata } from "next";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

import {
  baseUrl,
  defaultDescription,
  defaultKeywords,
  siteName,
} from "@/constants/config";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  icons: {
    icon: [
      {
        url: "/favicons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon.ico" },
    ],
    apple: {
      url: "/favicons/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName,
    title: siteName,
    description: defaultDescription,
    url: baseUrl,
    images: [
      {
        url: "/og-image.jpg",
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: ["/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: siteName,
      alternateName:
        "Ассоциация жертв политических репрессий «Номаран» («Память Имен»)",
      url: baseUrl,
      logo: `${baseUrl}/favicons/web-app-manifest-512x512.png`,
      telephone: "+7-919-423-91-00",
      areaServed: "Республика Северная Осетия — Алания",
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      name: siteName,
      url: baseUrl,
      inLanguage: "ru-RU",
      publisher: { "@id": `${baseUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/search?query={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="mx-auto max-w-[95%]">
        <JsonLd data={structuredData} />
        <Header />
        {children}
      </body>
    </html>
  );
}
