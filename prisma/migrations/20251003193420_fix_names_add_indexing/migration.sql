/*
  Warnings:

  - You are about to drop the `Victim` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Victim";

-- CreateTable
CREATE TABLE "victims" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "birth_year" INTEGER,
    "birth_place" TEXT,
    "national" TEXT,
    "other_data" TEXT,
    "category" "Category" NOT NULL,

    CONSTRAINT "victims_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "victims_fullname_idx" ON "victims"("fullname");

-- CreateIndex
CREATE INDEX "victims_birth_place_idx" ON "victims"("birth_place");

-- CreateIndex
CREATE INDEX "victims_national_idx" ON "victims"("national");

-- CreateIndex
CREATE INDEX "victims_other_data_idx" ON "victims"("other_data");
