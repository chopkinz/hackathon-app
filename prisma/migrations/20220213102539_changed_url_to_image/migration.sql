/*
  Warnings:

  - You are about to drop the column `url` on the `Animal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "url",
ADD COLUMN     "image" TEXT;
