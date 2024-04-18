-- DropForeignKey
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_shopId_fkey";

-- AlterTable
ALTER TABLE "Staff" ALTER COLUMN "shopId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
