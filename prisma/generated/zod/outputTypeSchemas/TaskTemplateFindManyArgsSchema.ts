import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateIncludeSchema } from '../inputTypeSchemas/TaskTemplateIncludeSchema'
import { TaskTemplateWhereInputSchema } from '../inputTypeSchemas/TaskTemplateWhereInputSchema'
import { TaskTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/TaskTemplateOrderByWithRelationInputSchema'
import { TaskTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/TaskTemplateWhereUniqueInputSchema'
import { TaskTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/TaskTemplateScalarFieldEnumSchema'
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

export const TaskTemplateFindManyArgsSchema: z.ZodType<Prisma.TaskTemplateFindManyArgs> = z.object({
  select: TaskTemplateSelectSchema.optional(),
  include: TaskTemplateIncludeSchema.optional(),
  where: TaskTemplateWhereInputSchema.optional(),
  orderBy: z.union([ TaskTemplateOrderByWithRelationInputSchema.array(),TaskTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaskTemplateScalarFieldEnumSchema,TaskTemplateScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default TaskTemplateFindManyArgsSchema;