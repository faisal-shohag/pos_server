/*
  Warnings:

  - You are about to drop the column `staffId` on the `Shop` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `Staff` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shopId]` on the table `Staff` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shopId` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Shop" DROP CONSTRAINT "Shop_staffId_fkey";

-- DropForeignKey
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_adminId_fkey";

-- DropIndex
DROP INDEX "Shop_staffId_key";

-- AlterTable
ALTER TABLE "Shop" DROP COLUMN "staffId";

-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "adminId",
ADD COLUMN     "shopId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Staff_shopId_key" ON "Staff"("shopId");

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
