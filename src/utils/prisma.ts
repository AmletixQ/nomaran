import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => console.log("Prisma Client connected"))
  .catch((e) => console.log(`Error for connecting Prisma Client: ${e}`));

export default prisma;
