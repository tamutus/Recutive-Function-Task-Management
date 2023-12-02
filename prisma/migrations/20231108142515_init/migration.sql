-- CreateEnum
CREATE TYPE "LinkType" AS ENUM ('BLOCKS', 'SUPPORTS', 'ENERGIZES', 'AUGMENTS');

-- CreateEnum
CREATE TYPE "SkillStatus" AS ENUM ('DISLIKES', 'WANTS', 'HELP', 'LEARNING', 'HAS', 'MENTOR', 'EXPERT');

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "bio" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectTemplate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT,
    "completionRequirements" TEXT,
    "image" TEXT,
    "color" TEXT,
    "links" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonsToProjectTemplates" (
    "personId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "PersonsToProjectTemplates_pkey" PRIMARY KEY ("personId","projectId")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT,
    "completionRequirements" TEXT,
    "color" TEXT,
    "links" TEXT[],
    "templateId" INTEGER,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "publicAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startAt" TIMESTAMP(3),
    "startedAt" TIMESTAMP(3),
    "dueAt" TIMESTAMP(3),
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonsToProjects" (
    "personId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,
    "volunteerDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonsToProjects_pkey" PRIMARY KEY ("personId","projectId")
);

-- CreateTable
CREATE TABLE "TaskTemplate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT,
    "completionRequirements" TEXT,
    "color" TEXT,
    "links" TEXT[],
    "schedule" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TaskTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskTemplateLink" (
    "precursorId" INTEGER NOT NULL,
    "successorId" INTEGER NOT NULL,
    "linkType" "LinkType" NOT NULL DEFAULT 'SUPPORTS',

    CONSTRAINT "TaskTemplateLink_pkey" PRIMARY KEY ("precursorId","successorId")
);

-- CreateTable
CREATE TABLE "PersonsToTaskTemplates" (
    "personId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "PersonsToTaskTemplates_pkey" PRIMARY KEY ("personId","taskId")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT,
    "color" TEXT,
    "links" TEXT[],
    "templateId" INTEGER,
    "personId" INTEGER,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "publicAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startAt" TIMESTAMP(3),
    "startedAt" TIMESTAMP(3),
    "dueAt" TIMESTAMP(3),
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskLink" (
    "precursorId" INTEGER NOT NULL,
    "successorId" INTEGER NOT NULL,
    "linkType" "LinkType" NOT NULL DEFAULT 'SUPPORTS',

    CONSTRAINT "TaskLink_pkey" PRIMARY KEY ("precursorId","successorId")
);

-- CreateTable
CREATE TABLE "TaskWork" (
    "id" SERIAL NOT NULL,
    "taskId" INTEGER NOT NULL,
    "notes" TEXT,
    "startedAt" TIMESTAMP(3),
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "TaskWork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectTemplatesToTaskTemplates" (
    "projectId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,
    "schedule" JSONB NOT NULL,

    CONSTRAINT "ProjectTemplatesToTaskTemplates_pkey" PRIMARY KEY ("projectId","taskId")
);

-- CreateTable
CREATE TABLE "ProjectsToTasks" (
    "projectId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "ProjectsToTasks_pkey" PRIMARY KEY ("projectId","taskId")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT,
    "nsfw" BOOLEAN NOT NULL DEFAULT false,
    "color" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrivateTag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT,
    "nsfw" BOOLEAN NOT NULL,
    "color" TEXT,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "PrivateTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonsToTags" (
    "followerId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "PersonsToTags_pkey" PRIMARY KEY ("followerId","tagId")
);

-- CreateTable
CREATE TABLE "ProjectTemplatesToTags" (
    "projectId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "taggerId" INTEGER NOT NULL,

    CONSTRAINT "ProjectTemplatesToTags_pkey" PRIMARY KEY ("projectId","tagId")
);

-- CreateTable
CREATE TABLE "PrivateTagsToProjectTemplates" (
    "projectId" INTEGER NOT NULL,
    "privateTagId" INTEGER NOT NULL,

    CONSTRAINT "PrivateTagsToProjectTemplates_pkey" PRIMARY KEY ("projectId","privateTagId")
);

-- CreateTable
CREATE TABLE "TagsToTaskTemplates" (
    "taskId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "taggerId" INTEGER NOT NULL,

    CONSTRAINT "TagsToTaskTemplates_pkey" PRIMARY KEY ("taskId","tagId")
);

-- CreateTable
CREATE TABLE "PrivateTagsToTaskTemplates" (
    "taskId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "PrivateTagsToTaskTemplates_pkey" PRIMARY KEY ("taskId","tagId")
);

-- CreateTable
CREATE TABLE "ProjectsToTags" (
    "tagId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "ProjectsToTags_pkey" PRIMARY KEY ("tagId","projectId")
);

-- CreateTable
CREATE TABLE "PrivateTagsToProjects" (
    "tagId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "PrivateTagsToProjects_pkey" PRIMARY KEY ("tagId","projectId")
);

-- CreateTable
CREATE TABLE "TagsToTasks" (
    "tagId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "TagsToTasks_pkey" PRIMARY KEY ("tagId","taskId")
);

-- CreateTable
CREATE TABLE "PrivateTagsToTasks" (
    "tagId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "PrivateTagsToTasks_pkey" PRIMARY KEY ("tagId","taskId")
);

-- CreateTable
CREATE TABLE "Energy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "info" TEXT,
    "color" TEXT,
    "music" TEXT[],

    CONSTRAINT "Energy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrivateEnergy" (
    "personId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "info" TEXT,
    "color" TEXT,
    "music" TEXT[],

    CONSTRAINT "PrivateEnergy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnergiesToProjectTemplates" (
    "projectId" INTEGER NOT NULL,
    "energyId" INTEGER NOT NULL,
    "links" TEXT[],
    "info" TEXT,

    CONSTRAINT "EnergiesToProjectTemplates_pkey" PRIMARY KEY ("projectId","energyId")
);

-- CreateTable
CREATE TABLE "PrivateEnergiesToProjectTemplates" (
    "projectId" INTEGER NOT NULL,
    "energyId" INTEGER NOT NULL,

    CONSTRAINT "PrivateEnergiesToProjectTemplates_pkey" PRIMARY KEY ("projectId","energyId")
);

-- CreateTable
CREATE TABLE "EnergiesToProjects" (
    "projectId" INTEGER NOT NULL,
    "energyId" INTEGER NOT NULL,
    "info" TEXT,
    "links" TEXT[],

    CONSTRAINT "EnergiesToProjects_pkey" PRIMARY KEY ("projectId","energyId")
);

-- CreateTable
CREATE TABLE "PrivateEnergiesToProjects" (
    "projectId" INTEGER NOT NULL,
    "energyId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "PrivateEnergiesToProjects_pkey" PRIMARY KEY ("projectId","energyId")
);

-- CreateTable
CREATE TABLE "EnergiesToTaskTemplates" (
    "taskId" INTEGER NOT NULL,
    "energyId" INTEGER NOT NULL,
    "info" TEXT,
    "links" TEXT[],

    CONSTRAINT "EnergiesToTaskTemplates_pkey" PRIMARY KEY ("taskId","energyId")
);

-- CreateTable
CREATE TABLE "PrivateEnergiesToTaskTemplates" (
    "taskId" INTEGER NOT NULL,
    "energyId" INTEGER NOT NULL,

    CONSTRAINT "PrivateEnergiesToTaskTemplates_pkey" PRIMARY KEY ("taskId","energyId")
);

-- CreateTable
CREATE TABLE "EnergiesToTasks" (
    "energyId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "EnergiesToTasks_pkey" PRIMARY KEY ("energyId","taskId")
);

-- CreateTable
CREATE TABLE "PrivateEnergiesToTasks" (
    "energyId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "PrivateEnergiesToTasks_pkey" PRIMARY KEY ("energyId","taskId")
);

-- CreateTable
CREATE TABLE "EnergiesToTags" (
    "energyId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "taggerId" INTEGER NOT NULL,
    "info" TEXT,

    CONSTRAINT "EnergiesToTags_pkey" PRIMARY KEY ("energyId","tagId")
);

-- CreateTable
CREATE TABLE "EnergiesToPrivateTags" (
    "energyId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "EnergiesToPrivateTags_pkey" PRIMARY KEY ("energyId","tagId")
);

-- CreateTable
CREATE TABLE "PrivateEnergiesToPrivateTags" (
    "energyId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "PrivateEnergiesToPrivateTags_pkey" PRIMARY KEY ("energyId","tagId")
);

-- CreateTable
CREATE TABLE "PrivateEnergiesToTags" (
    "energyId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "PrivateEnergiesToTags_pkey" PRIMARY KEY ("energyId","tagId")
);

-- CreateTable
CREATE TABLE "EnergiesToPersons" (
    "personId" INTEGER NOT NULL,
    "energyId" INTEGER NOT NULL,

    CONSTRAINT "EnergiesToPersons_pkey" PRIMARY KEY ("personId","energyId")
);

-- CreateTable
CREATE TABLE "EnergyMeasurement" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "measurement" DECIMAL(65,30) NOT NULL,
    "personId" INTEGER NOT NULL,
    "energyId" INTEGER NOT NULL,

    CONSTRAINT "EnergyMeasurement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnergiesToTaskWorks" (
    "energyId" INTEGER NOT NULL,
    "workId" INTEGER NOT NULL,
    "startingValue" DECIMAL(65,30) NOT NULL,
    "endingValue" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "EnergiesToTaskWorks_pkey" PRIMARY KEY ("energyId","workId")
);

-- CreateTable
CREATE TABLE "PrivateEnergiesToTaskWorks" (
    "energyId" INTEGER NOT NULL,
    "workId" INTEGER NOT NULL,
    "startingValue" DECIMAL(65,30) NOT NULL,
    "endingValue" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "PrivateEnergiesToTaskWorks_pkey" PRIMARY KEY ("energyId","workId")
);

-- CreateTable
CREATE TABLE "Priority" (
    "id" SERIAL NOT NULL,
    "personId" INTEGER NOT NULL,
    "info" TEXT,
    "color" TEXT,

    CONSTRAINT "Priority_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrioritiesToTasks" (
    "priorityId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "PrioritiesToTasks_pkey" PRIMARY KEY ("priorityId","taskId")
);

-- CreateTable
CREATE TABLE "PrioritiesToProjects" (
    "projectId" INTEGER NOT NULL,
    "priorityId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "PrioritiesToProjects_pkey" PRIMARY KEY ("projectId","priorityId")
);

-- CreateTable
CREATE TABLE "PrioritiesToSkills" (
    "priorityId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "PrioritiesToSkills_pkey" PRIMARY KEY ("skillId","priorityId")
);

-- CreateTable
CREATE TABLE "PrioritiesToSkillPaths" (
    "skillPathId" INTEGER NOT NULL,
    "priorityId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "PrioritiesToSkillPaths_pkey" PRIMARY KEY ("skillPathId","priorityId")
);

-- CreateTable
CREATE TABLE "PrioritiesToTags" (
    "tagId" INTEGER NOT NULL,
    "priorityId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "PrioritiesToTags_pkey" PRIMARY KEY ("tagId","priorityId")
);

-- CreateTable
CREATE TABLE "PrioritiesToPrivateTags" (
    "tagId" INTEGER NOT NULL,
    "priorityId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "PrioritiesToPrivateTags_pkey" PRIMARY KEY ("tagId","priorityId")
);

-- CreateTable
CREATE TABLE "SkillPath" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT,

    CONSTRAINT "SkillPath_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonsToSkillPaths" (
    "personId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "PersonsToSkillPaths_pkey" PRIMARY KEY ("personId","skillId")
);

-- CreateTable
CREATE TABLE "SkillPathsToTags" (
    "skillId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "taggerId" INTEGER NOT NULL,

    CONSTRAINT "SkillPathsToTags_pkey" PRIMARY KEY ("skillId","tagId")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillLink" (
    "precursorId" INTEGER NOT NULL,
    "successorId" INTEGER NOT NULL,
    "info" TEXT,
    "hourGate" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "SkillLink_pkey" PRIMARY KEY ("precursorId","successorId")
);

-- CreateTable
CREATE TABLE "SkillsToSkillPaths" (
    "skillId" INTEGER NOT NULL,
    "skillPathId" INTEGER NOT NULL,

    CONSTRAINT "SkillsToSkillPaths_pkey" PRIMARY KEY ("skillId","skillPathId")
);

-- CreateTable
CREATE TABLE "PersonsToSkills" (
    "personId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "PersonsToSkills_pkey" PRIMARY KEY ("personId","skillId")
);

-- CreateTable
CREATE TABLE "SkillsToTags" (
    "skillId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "taggerId" INTEGER NOT NULL,

    CONSTRAINT "SkillsToTags_pkey" PRIMARY KEY ("skillId","tagId")
);

-- CreateTable
CREATE TABLE "SkillsToTaskTemplates" (
    "taskId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "SkillsToTaskTemplates_pkey" PRIMARY KEY ("taskId","skillId")
);

-- CreateTable
CREATE TABLE "SkillsToTasks" (
    "taskId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "SkillsToTasks_pkey" PRIMARY KEY ("taskId","skillId")
);

-- CreateTable
CREATE TABLE "EnergiesToSkills" (
    "skillId" INTEGER NOT NULL,
    "energyId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "EnergiesToSkills_pkey" PRIMARY KEY ("skillId","energyId")
);

-- CreateTable
CREATE TABLE "PrivateEnergiesToSkills" (
    "skillId" INTEGER NOT NULL,
    "energyId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "PrivateEnergiesToSkills_pkey" PRIMARY KEY ("skillId","energyId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectTemplate_name_key" ON "ProjectTemplate"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TaskTemplate_name_key" ON "TaskTemplate"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PrivateTag_personId_name_key" ON "PrivateTag"("personId", "name");

-- AddForeignKey
ALTER TABLE "PersonsToProjectTemplates" ADD CONSTRAINT "PersonsToProjectTemplates_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonsToProjectTemplates" ADD CONSTRAINT "PersonsToProjectTemplates_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "ProjectTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "ProjectTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonsToProjects" ADD CONSTRAINT "PersonsToProjects_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonsToProjects" ADD CONSTRAINT "PersonsToProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskTemplateLink" ADD CONSTRAINT "TaskTemplateLink_precursorId_fkey" FOREIGN KEY ("precursorId") REFERENCES "TaskTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskTemplateLink" ADD CONSTRAINT "TaskTemplateLink_successorId_fkey" FOREIGN KEY ("successorId") REFERENCES "TaskTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonsToTaskTemplates" ADD CONSTRAINT "PersonsToTaskTemplates_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonsToTaskTemplates" ADD CONSTRAINT "PersonsToTaskTemplates_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "TaskTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "TaskTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskLink" ADD CONSTRAINT "TaskLink_precursorId_fkey" FOREIGN KEY ("precursorId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskLink" ADD CONSTRAINT "TaskLink_successorId_fkey" FOREIGN KEY ("successorId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskWork" ADD CONSTRAINT "TaskWork_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTemplatesToTaskTemplates" ADD CONSTRAINT "ProjectTemplatesToTaskTemplates_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "ProjectTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTemplatesToTaskTemplates" ADD CONSTRAINT "ProjectTemplatesToTaskTemplates_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "TaskTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsToTasks" ADD CONSTRAINT "ProjectsToTasks_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsToTasks" ADD CONSTRAINT "ProjectsToTasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateTag" ADD CONSTRAINT "PrivateTag_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonsToTags" ADD CONSTRAINT "PersonsToTags_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonsToTags" ADD CONSTRAINT "PersonsToTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTemplatesToTags" ADD CONSTRAINT "ProjectTemplatesToTags_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "ProjectTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTemplatesToTags" ADD CONSTRAINT "ProjectTemplatesToTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTemplatesToTags" ADD CONSTRAINT "ProjectTemplatesToTags_taggerId_fkey" FOREIGN KEY ("taggerId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateTagsToProjectTemplates" ADD CONSTRAINT "PrivateTagsToProjectTemplates_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "ProjectTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateTagsToProjectTemplates" ADD CONSTRAINT "PrivateTagsToProjectTemplates_privateTagId_fkey" FOREIGN KEY ("privateTagId") REFERENCES "PrivateTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsToTaskTemplates" ADD CONSTRAINT "TagsToTaskTemplates_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "TaskTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsToTaskTemplates" ADD CONSTRAINT "TagsToTaskTemplates_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsToTaskTemplates" ADD CONSTRAINT "TagsToTaskTemplates_taggerId_fkey" FOREIGN KEY ("taggerId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateTagsToTaskTemplates" ADD CONSTRAINT "PrivateTagsToTaskTemplates_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "TaskTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateTagsToTaskTemplates" ADD CONSTRAINT "PrivateTagsToTaskTemplates_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "PrivateTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsToTags" ADD CONSTRAINT "ProjectsToTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsToTags" ADD CONSTRAINT "ProjectsToTags_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateTagsToProjects" ADD CONSTRAINT "PrivateTagsToProjects_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "PrivateTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateTagsToProjects" ADD CONSTRAINT "PrivateTagsToProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsToTasks" ADD CONSTRAINT "TagsToTasks_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsToTasks" ADD CONSTRAINT "TagsToTasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateTagsToTasks" ADD CONSTRAINT "PrivateTagsToTasks_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "PrivateTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateTagsToTasks" ADD CONSTRAINT "PrivateTagsToTasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergy" ADD CONSTRAINT "PrivateEnergy_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToProjectTemplates" ADD CONSTRAINT "EnergiesToProjectTemplates_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "ProjectTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToProjectTemplates" ADD CONSTRAINT "EnergiesToProjectTemplates_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "Energy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToProjectTemplates" ADD CONSTRAINT "PrivateEnergiesToProjectTemplates_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "ProjectTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToProjectTemplates" ADD CONSTRAINT "PrivateEnergiesToProjectTemplates_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "PrivateEnergy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToProjects" ADD CONSTRAINT "EnergiesToProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToProjects" ADD CONSTRAINT "EnergiesToProjects_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "Energy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToProjects" ADD CONSTRAINT "PrivateEnergiesToProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToProjects" ADD CONSTRAINT "PrivateEnergiesToProjects_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "PrivateEnergy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToTaskTemplates" ADD CONSTRAINT "EnergiesToTaskTemplates_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "TaskTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToTaskTemplates" ADD CONSTRAINT "EnergiesToTaskTemplates_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "Energy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToTaskTemplates" ADD CONSTRAINT "PrivateEnergiesToTaskTemplates_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "TaskTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToTaskTemplates" ADD CONSTRAINT "PrivateEnergiesToTaskTemplates_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "PrivateEnergy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToTasks" ADD CONSTRAINT "EnergiesToTasks_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "Energy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToTasks" ADD CONSTRAINT "EnergiesToTasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToTasks" ADD CONSTRAINT "PrivateEnergiesToTasks_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "PrivateEnergy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToTasks" ADD CONSTRAINT "PrivateEnergiesToTasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToTags" ADD CONSTRAINT "EnergiesToTags_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "Energy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToTags" ADD CONSTRAINT "EnergiesToTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToTags" ADD CONSTRAINT "EnergiesToTags_taggerId_fkey" FOREIGN KEY ("taggerId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToPrivateTags" ADD CONSTRAINT "EnergiesToPrivateTags_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "Energy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToPrivateTags" ADD CONSTRAINT "EnergiesToPrivateTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "PrivateTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToPrivateTags" ADD CONSTRAINT "PrivateEnergiesToPrivateTags_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "PrivateEnergy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToPrivateTags" ADD CONSTRAINT "PrivateEnergiesToPrivateTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "PrivateTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToTags" ADD CONSTRAINT "PrivateEnergiesToTags_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "PrivateEnergy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToTags" ADD CONSTRAINT "PrivateEnergiesToTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToPersons" ADD CONSTRAINT "EnergiesToPersons_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToPersons" ADD CONSTRAINT "EnergiesToPersons_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "Energy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergyMeasurement" ADD CONSTRAINT "EnergyMeasurement_personId_energyId_fkey" FOREIGN KEY ("personId", "energyId") REFERENCES "EnergiesToPersons"("personId", "energyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToTaskWorks" ADD CONSTRAINT "EnergiesToTaskWorks_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "Energy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToTaskWorks" ADD CONSTRAINT "EnergiesToTaskWorks_workId_fkey" FOREIGN KEY ("workId") REFERENCES "TaskWork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToTaskWorks" ADD CONSTRAINT "PrivateEnergiesToTaskWorks_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "PrivateEnergy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToTaskWorks" ADD CONSTRAINT "PrivateEnergiesToTaskWorks_workId_fkey" FOREIGN KEY ("workId") REFERENCES "TaskWork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Priority" ADD CONSTRAINT "Priority_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToTasks" ADD CONSTRAINT "PrioritiesToTasks_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "Priority"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToTasks" ADD CONSTRAINT "PrioritiesToTasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToProjects" ADD CONSTRAINT "PrioritiesToProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToProjects" ADD CONSTRAINT "PrioritiesToProjects_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "Priority"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToSkills" ADD CONSTRAINT "PrioritiesToSkills_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "Priority"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToSkills" ADD CONSTRAINT "PrioritiesToSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToSkillPaths" ADD CONSTRAINT "PrioritiesToSkillPaths_skillPathId_fkey" FOREIGN KEY ("skillPathId") REFERENCES "SkillPath"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToSkillPaths" ADD CONSTRAINT "PrioritiesToSkillPaths_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "Priority"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToTags" ADD CONSTRAINT "PrioritiesToTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToTags" ADD CONSTRAINT "PrioritiesToTags_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "Priority"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToPrivateTags" ADD CONSTRAINT "PrioritiesToPrivateTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "PrivateTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrioritiesToPrivateTags" ADD CONSTRAINT "PrioritiesToPrivateTags_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "Priority"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonsToSkillPaths" ADD CONSTRAINT "PersonsToSkillPaths_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonsToSkillPaths" ADD CONSTRAINT "PersonsToSkillPaths_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "SkillPath"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillPathsToTags" ADD CONSTRAINT "SkillPathsToTags_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "SkillPath"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillPathsToTags" ADD CONSTRAINT "SkillPathsToTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillPathsToTags" ADD CONSTRAINT "SkillPathsToTags_taggerId_fkey" FOREIGN KEY ("taggerId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillLink" ADD CONSTRAINT "SkillLink_precursorId_fkey" FOREIGN KEY ("precursorId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillLink" ADD CONSTRAINT "SkillLink_successorId_fkey" FOREIGN KEY ("successorId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsToSkillPaths" ADD CONSTRAINT "SkillsToSkillPaths_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsToSkillPaths" ADD CONSTRAINT "SkillsToSkillPaths_skillPathId_fkey" FOREIGN KEY ("skillPathId") REFERENCES "SkillPath"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonsToSkills" ADD CONSTRAINT "PersonsToSkills_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonsToSkills" ADD CONSTRAINT "PersonsToSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsToTags" ADD CONSTRAINT "SkillsToTags_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsToTags" ADD CONSTRAINT "SkillsToTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsToTags" ADD CONSTRAINT "SkillsToTags_taggerId_fkey" FOREIGN KEY ("taggerId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsToTaskTemplates" ADD CONSTRAINT "SkillsToTaskTemplates_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "TaskTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsToTaskTemplates" ADD CONSTRAINT "SkillsToTaskTemplates_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsToTasks" ADD CONSTRAINT "SkillsToTasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsToTasks" ADD CONSTRAINT "SkillsToTasks_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToSkills" ADD CONSTRAINT "EnergiesToSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnergiesToSkills" ADD CONSTRAINT "EnergiesToSkills_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "Energy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToSkills" ADD CONSTRAINT "PrivateEnergiesToSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateEnergiesToSkills" ADD CONSTRAINT "PrivateEnergiesToSkills_energyId_fkey" FOREIGN KEY ("energyId") REFERENCES "PrivateEnergy"("id") ON DELETE CASCADE ON UPDATE CASCADE;
