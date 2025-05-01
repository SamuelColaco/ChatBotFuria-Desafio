/*
  Warnings:

  - You are about to drop the column `answer` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "answer",
ADD COLUMN     "question" TEXT;
