-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "username" VARCHAR(80) NOT NULL,
    "password" VARCHAR(80) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
