/*
  Warnings:

  - The values [BLOCKS,SUPPORTS,ENERGIZES,AUGMENTS] on the enum `LinkType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LinkType_new" AS ENUM ('ENABLES', 'PREVENTS', 'STARTS', 'REPLACES', 'AMPLIFIES', 'WEAKENS', 'FIXES', 'UNDOES', 'EASES', 'TOUGHENS', 'FASTFORWARDS', 'ACCELERATES', 'PAUSES', 'SLOWS', 'PROLONGS');
ALTER TABLE "TaskLink" ALTER COLUMN "linkType" DROP DEFAULT;
ALTER TABLE "TaskTemplateLink" ALTER COLUMN "linkType" DROP DEFAULT;
ALTER TABLE "TaskTemplateLink" ALTER COLUMN "linkType" TYPE "LinkType_new" USING ("linkType"::text::"LinkType_new");
ALTER TABLE "TaskLink" ALTER COLUMN "linkType" TYPE "LinkType_new" USING ("linkType"::text::"LinkType_new");
ALTER TYPE "LinkType" RENAME TO "LinkType_old";
ALTER TYPE "LinkType_new" RENAME TO "LinkType";
DROP TYPE "LinkType_old";
ALTER TABLE "TaskLink" ALTER COLUMN "linkType" SET DEFAULT 'ENABLES';
ALTER TABLE "TaskTemplateLink" ALTER COLUMN "linkType" SET DEFAULT 'ENABLES';
COMMIT;

-- AlterTable
ALTER TABLE "TaskLink" ALTER COLUMN "linkType" SET DEFAULT 'ENABLES';

-- AlterTable
ALTER TABLE "TaskTemplateLink" ALTER COLUMN "linkType" SET DEFAULT 'ENABLES';
