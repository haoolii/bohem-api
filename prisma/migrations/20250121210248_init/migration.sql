-- CreateTable
CREATE TABLE "Record" (
    "id" TEXT NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "original" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordRequired" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "expireIn" INTEGER NOT NULL,
    "expireAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Config" (
    "id" TEXT NOT NULL,
    "assetPrefixPath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Record_uniqueId_key" ON "Record"("uniqueId");
