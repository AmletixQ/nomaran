import type { Metadata } from "next";
import { baseUrl, siteName } from "@/constants/config";

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  index = true,
  follow = true,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  index?: boolean;
  follow?: boolean;
  absolute?: boolean;
}): Metadata {
  const url = path === "/" ? baseUrl : `${baseUrl}${path}`;
  const fullTitle = absolute ? title : `${title} | ${siteName}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: { index, follow },
    openGraph: {
      title: fullTitle,
      description,
      url,
      locale: "ru_RU",
      siteName,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
