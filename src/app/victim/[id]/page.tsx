import React from "react";
import prisma from "@/utils/prisma";
import ScreenContainer from "@/components/ScreenContainer";
import Backlink from "@/components/ui/Backlink";

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
    <main className="2xl:mx-30">
      <ScreenContainer className="flex items-center xl:pt-15">
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
            <div className="flex items-center gap-2.5">
              <h6 className="md:text-[18px]">Категория:</h6>
              <p>
                {victim?.category === "DISPOSSESSED"
                  ? "Раскулаченный"
                  : victim?.category === "REPRESSED"
                    ? "Репрессированный"
                    : "Нац. признак"}
              </p>
            </div>
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
      </ScreenContainer>
    </main>
  );
}
