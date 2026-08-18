import type { MetadataRoute } from "next";
import { baseUrl } from "@/constants/config";
import prisma from "@/utils/prisma";

export const revalidate = 86400;

const staticPages: MetadataRoute.Sitemap = [
  {
    url: baseUrl,
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: `${baseUrl}/about`,
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/activity`,
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/victims`,
    changeFrequency: "yearly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/itls`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${baseUrl}/abbreviations`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${baseUrl}/search`,
    changeFrequency: "weekly",
    priority: 0.9,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const victims = await prisma.victim.findMany({
      select: { id: true },
      orderBy: { id: "asc" },
    });

    const victimPages: MetadataRoute.Sitemap = victims.map((victim) => ({
      url: `${baseUrl}/victim/${victim.id}`,
      changeFrequency: "yearly",
      priority: 0.7,
    }));

    return [...staticPages, ...victimPages];
  } catch {
    return staticPages;
  }
}
