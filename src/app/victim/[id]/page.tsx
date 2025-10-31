import React from "react";
import prisma from "@/utils/prisma";
import Backlink from "@/components/ui/Backlink";
import VictimCategory from "@/components/victims/VictimCategory";

export default async function VictimProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const victim = await prisma.victim.findUnique({
    where: { id: parseInt(id) },
  });

  return (
    <main className="h-screen pt-40 md:pt-50 xl:pt-80 2xl:mx-30">
      <div className="flex flex-col gap-4 md:gap-8">
        <Backlink />
        <h3>{victim?.fullname}</h3>

        <div className="flex flex-col gap-3">
          {victim?.birthYear && (
            <div className="flex items-center gap-2.5">
              <h6 className="md:text-[18px]">Год рождения:</h6>
              <p>{victim.birthYear}</p>
            </div>
          )}
          {victim?.birthPlace && (
            <div className="flex items-center gap-2.5">
              <h6 className="md:text-[18px]">Место рождения:</h6>
              <p>{victim.birthPlace}</p>
            </div>
          )}
          {victim?.national && (
            <div className="flex items-center gap-2.5">
              <h6 className="md:text-[18px]">Национальность:</h6>
              <p>{victim.national}</p>
            </div>
          )}
          <VictimCategory category={victim?.category} />
        </div>

        {victim?.otherData && (
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
