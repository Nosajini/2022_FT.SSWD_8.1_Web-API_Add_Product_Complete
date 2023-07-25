-- CreateTable
CREATE TABLE "supportArea" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "areaName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "support" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "supportArea_id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    CONSTRAINT "support_supportArea_id_fkey" FOREIGN KEY ("supportArea_id") REFERENCES "supportArea" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
