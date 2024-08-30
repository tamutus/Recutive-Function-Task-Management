-- AlterTable
ALTER TABLE "PrioritiesToProjects" ADD COLUMN     "weight" DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "completionReview" TEXT,
ADD COLUMN     "problemStatement" TEXT;

-- AlterTable
ALTER TABLE "ProjectTemplatesToTaskTemplates" ADD COLUMN     "problemSolvency" TEXT;

-- AlterTable
ALTER TABLE "ProjectsToTasks" ADD COLUMN     "problemSolvency" TEXT;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "completionReview" TEXT;

-- CreateTable
CREATE TABLE "Context" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Context_pkey" PRIMARY KEY ("id")
);
