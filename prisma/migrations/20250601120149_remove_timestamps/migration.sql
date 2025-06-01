/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Teacher` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Teacher_email_idx";

-- DropIndex
DROP INDEX "Teacher_name_idx";

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
