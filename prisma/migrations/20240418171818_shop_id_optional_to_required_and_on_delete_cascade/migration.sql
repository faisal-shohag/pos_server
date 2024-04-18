/*
  Warnings:

  - Made the column `shopId` on table `Staff` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_shopId_fkey";

-- AlterTable
ALTER TABLE "Staff" ALTER COLUMN "shopId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
