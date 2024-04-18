/*
  Warnings:

  - You are about to drop the column `dailySaleId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `DailySale` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `barCode` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_dailySaleId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "dailySaleId",
ADD COLUMN     "barCode" TEXT NOT NULL;

-- DropTable
DROP TABLE "DailySale";
