import React from "react";
import Backlink from "@/components/ui/Backlink";
import VictimCategory from "@/components/victims/VictimCategory";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/utils/seo";
import { baseUrl } from "@/constants/config";
import { categoryDisplay } from "@/utils/categoryDisplay";
import { getVictimById, parseVictimId } from "@/utils/getVictimById";

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id: rawId } = await params;
  const id = parseVictimId(rawId);

  if (id === null) {
    return { title: "Страница не найдена", robots: { index: false } };
  }

  const victim = await getVictimById(id);

  if (!victim) {
    return { title: "Страница не найдена", robots: { index: false } };
  }

  const description = [
    `Информация о жертве политических репрессий ${victim.fullname}`,
    victim.birthYear && `год рождения ${victim.birthYear}`,
    victim.birthPlace,
    categoryDisplay(victim.category),
  ]
    .filter(Boolean)
    .join(", ");

  return pageMetadata({
    title: victim.fullname,
    description,
    path: `/victim/${id}`,
    keywords: [
      victim.fullname,
      "жертвы репрессий",
      "политические репрессии",
      "номаран",
      "Северо-Осетинская АССР",
    ],
  });
}

export default async function VictimProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawId } = await params;
  const id = parseVictimId(rawId);

  if (id === null) notFound();

  const victim = await getVictimById(id);

  if (!victim) notFound();

  return (
    <main className="pt-6 md:pt-8 2xl:mx-30">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: victim.fullname,
              birthDate: victim.birthYear ? String(victim.birthYear) : undefined,
              birthPlace: victim.birthPlace || undefined,
              description: victim.otherData || undefined,
              url: `${baseUrl}/victim/${id}`,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Главная",
                  item: baseUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Поиск",
                  item: `${baseUrl}/search`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: victim.fullname,
                  item: `${baseUrl}/victim/${id}`,
                },
              ],
            },
          ],
        }}
      />
      <div className="flex flex-col gap-4 md:gap-8">
        <Backlink />
        <h1 className="profile-title">{victim.fullname}</h1>

        <div className="flex flex-col gap-3">
          {victim.birthYear && (
            <div className="flex items-center gap-2.5">
              <h6 className="md:text-[18px]">Год рождения:</h6>
              <p>{victim.birthYear}</p>
            </div>
          )}
          {victim.birthPlace && (
            <div className="flex items-center gap-2.5">
              <h6 className="md:text-[18px]">Место рождения:</h6>
              <p>{victim.birthPlace}</p>
            </div>
          )}
          {victim.national && (
            <div className="flex items-center gap-2.5">
              <h6 className="md:text-[18px]">Национальность:</h6>
              <p>{victim.national}</p>
            </div>
          )}
          <VictimCategory category={victim.category} />
        </div>

        {victim.otherData && (
          <div className="flex flex-col gap-2.5">
            <h5 className="text-[22px] md:text-[18px]">
              Дополнительная информация
            </h5>
            <p className="leading-[160%]">{victim.otherData}</p>
          </div>
        )}
      </div>
    </main>
  );
}
