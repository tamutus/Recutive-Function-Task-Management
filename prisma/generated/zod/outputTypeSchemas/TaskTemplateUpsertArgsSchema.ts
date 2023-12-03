import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateIncludeSchema } from '../inputTypeSchemas/TaskTemplateIncludeSchema'
import { TaskTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/TaskTemplateWhereUniqueInputSchema'
import { TaskTemplateCreateInputSchema } from '../inputTypeSchemas/TaskTemplateCreateInputSchema'
import { TaskTemplateUncheckedCreateInputSchema } from '../inputTypeSchemas/TaskTemplateUncheckedCreateInputSchema'
import { TaskTemplateUpdateInputSchema } from '../inputTypeSchemas/TaskTemplateUpdateInputSchema'
import { TaskTemplateUncheckedUpdateInputSchema } from '../inputTypeSchemas/TaskTemplateUncheckedUpdateInputSchema'
import { ProjectTemplatesToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/ProjectTemplatesToTaskTemplatesFindManyArgsSchema"
import { TaskTemplateLinkFindManyArgsSchema } from "../outputTypeSchemas/TaskTemplateLinkFindManyArgsSchema"
import { SkillsToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/SkillsToTaskTemplatesFindManyArgsSchema"
import { TagsToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/TagsToTaskTemplatesFindManyArgsSchema"
import { PrivateTagsToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToTaskTemplatesFindManyArgsSchema"
import { EnergiesToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToTaskTemplatesFindManyArgsSchema"
import { PrivateEnergiesToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToTaskTemplatesFindManyArgsSchema"
import { PersonsToTaskTemplatesFindManyArgsSchema } from "../outputTypeSchemas/PersonsToTaskTemplatesFindManyArgsSchema"
import { TaskFindManyArgsSchema } from "../outputTypeSchemas/TaskFindManyArgsSchema"
import { TaskTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/TaskTemplateCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskTemplateSelectSchema: z.ZodType<Prisma.TaskTemplateSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  info: z.boolean().optional(),
  completionRequirements: z.boolean().optional(),
  color: z.boolean().optional(),
  links: z.boolean().optional(),
  schedule: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  projects: z.union([z.boolean(),z.lazy(() => ProjectTemplatesToTaskTemplatesFindManyArgsSchema)]).optional(),
  precursors: z.union([z.boolean(),z.lazy(() => TaskTemplateLinkFindManyArgsSchema)]).optional(),
  successors: z.union([z.boolean(),z.lazy(() => TaskTemplateLinkFindManyArgsSchema)]).optional(),
  skills: z.union([z.boolean(),z.lazy(() => SkillsToTaskTemplatesFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagsToTaskTemplatesFindManyArgsSchema)]).optional(),
  privateTags: z.union([z.boolean(),z.lazy(() => PrivateTagsToTaskTemplatesFindManyArgsSchema)]).optional(),
  energies: z.union([z.boolean(),z.lazy(() => EnergiesToTaskTemplatesFindManyArgsSchema)]).optional(),
  privateEnergies: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToTaskTemplatesFindManyArgsSchema)]).optional(),
  collaborators: z.union([z.boolean(),z.lazy(() => PersonsToTaskTemplatesFindManyArgsSchema)]).optional(),
  implementations: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TaskTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TaskTemplateUpsertArgsSchema: z.ZodType<Prisma.TaskTemplateUpsertArgs> = z.object({
  select: TaskTemplateSelectSchema.optional(),
  include: TaskTemplateIncludeSchema.optional(),
  where: TaskTemplateWhereUniqueInputSchema,
  create: z.union([ TaskTemplateCreateInputSchema,TaskTemplateUncheckedCreateInputSchema ]),
  update: z.union([ TaskTemplateUpdateInputSchema,TaskTemplateUncheckedUpdateInputSchema ]),
}).strict()

export default TaskTemplateUpsertArgsSchema;
