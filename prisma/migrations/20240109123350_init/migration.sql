/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_user_id_fkey";

-- DropTable
DROP TABLE "Admin";

-- CreateTable
CREATE TABLE "UserType" (
    "user_type_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "other_user_detail" TEXT,

    CONSTRAINT "UserType_pkey" PRIMARY KEY ("user_type_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserType_user_id_key" ON "UserType"("user_id");

-- AddForeignKey
ALTER TABLE "UserType" ADD CONSTRAINT "UserType_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
