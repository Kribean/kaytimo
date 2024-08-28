-- CreateTable
CREATE TABLE "CardActiv" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name_fr" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "approxDistance" REAL NOT NULL,
    "approxTime" REAL NOT NULL,
    "carRequired" BOOLEAN NOT NULL,
    "targetAudience" TEXT NOT NULL,
    "suitableFor" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
