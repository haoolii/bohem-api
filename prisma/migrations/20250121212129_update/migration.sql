-- AlterTable
ALTER TABLE "Record" ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "passwordRequired" SET DEFAULT false,
ALTER COLUMN "prompt" DROP NOT NULL;
