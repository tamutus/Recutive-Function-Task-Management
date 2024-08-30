/*
  Warnings:

  - Added the required column `personId` to the `TaskWork` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TaskWork" ADD COLUMN     "personId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TaskWork" ADD CONSTRAINT "TaskWork_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
