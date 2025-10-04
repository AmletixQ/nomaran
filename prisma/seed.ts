import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seeding() {
  console.log("Starting seeding...");
  const res = await prisma.victim.createMany({
    data: [
      {
        fullname: "АХПОЛОВ Михаил Гаврилович",
        birthYear: 1890,
        birthPlace: "уроженец сел. Веселое Моздокского района",
        category: "DISPOSSESSED",
      },
      {
        fullname: "АХПОЛОВ Михаил Гаврилович",
        birthYear: 1890,
        birthPlace: "уроженец сел. Веселое Моздокского района",
        category: "DISPOSSESSED",
      },
      {
        fullname: "АХПОЛОВ Михаил Гаврилович",
        birthYear: 1890,
        birthPlace: "уроженец сел. Веселое Моздокского района",
        category: "DISPOSSESSED",
      },
      {
        fullname: "АХПОЛОВ Михаил Гаврилович",
        birthYear: 1890,
        birthPlace: "уроженец сел. Веселое Моздокского района",
        category: "DISPOSSESSED",
      },
    ],
  });
  console.log(res);
  console.log("Completed seeding.")
}

seeding()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
