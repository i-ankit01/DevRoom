/*
  Warnings:

  - You are about to drop the column `playgroundId` on the `StarMark` table. All the data in the column will be lost.
  - You are about to drop the `Playground` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,projectId]` on the table `StarMark` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectId` to the `StarMark` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Playground" DROP CONSTRAINT "Playground_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."StarMark" DROP CONSTRAINT "StarMark_playgroundId_fkey";

-- DropIndex
DROP INDEX "public"."StarMark_userId_playgroundId_key";

-- AlterTable
ALTER TABLE "StarMark" DROP COLUMN "playgroundId",
ADD COLUMN     "projectId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Playground";

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "template" "Templates" NOT NULL DEFAULT 'REACT',
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StarMark_userId_projectId_key" ON "StarMark"("userId", "projectId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StarMark" ADD CONSTRAINT "StarMark_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
