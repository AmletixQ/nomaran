import Backlink from "@/components/Backlink";
import React from "react";
import prisma from "@/utils/prisma";

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
    <main className="flex flex-col gap-8 pt-25">
      <Backlink />
      <h3>{victim?.fullname}</h3>

      <div className="flex flex-col gap-3">
        {victim?.birthYear && (
          <div className="flex items-center gap-2.5">
            <h6 className="text-[18px]">Дата рождения:</h6>
            <p>{victim.birthYear}</p>
          </div>
        )}
        {victim?.birthPlace && (
          <div className="flex items-center gap-2.5">
            <h6 className="text-[18px]">Дата рождения:</h6>
            <p>{victim.birthPlace}</p>
          </div>
        )}
        <div className="flex items-center gap-2.5">
          <h6 className="text-[18px]">Категория:</h6>
          <p>{victim?.category}</p>
        </div>
      </div>

      {victim?.otherData && (
        <div>
          <h5>Дополнительная информация</h5>
          <p>{victim.otherData}</p>
        </div>
      )}
    </main>
  );
}
