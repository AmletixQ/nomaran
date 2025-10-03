/*
  Warnings:

  - You are about to drop the `U` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('REPRESSED', 'DISPOSSESSED', 'NATATTRIBUTE');

-- DropTable
DROP TABLE "public"."U";

-- CreateTable
CREATE TABLE "Victim" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "birth_year" INTEGER,
    "birth_place" TEXT,
    "national" TEXT,
    "otherData" TEXT,
    "category" "Category" NOT NULL,

    CONSTRAINT "Victim_pkey" PRIMARY KEY ("id")
);
