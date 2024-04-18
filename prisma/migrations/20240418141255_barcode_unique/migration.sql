/*
  Warnings:

  - A unique constraint covering the columns `[barCode]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_barCode_key" ON "Product"("barCode");
