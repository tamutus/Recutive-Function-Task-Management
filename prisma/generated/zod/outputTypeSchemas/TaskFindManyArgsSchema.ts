import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskIncludeSchema } from '../inputTypeSchemas/TaskIncludeSchema'
import { TaskWhereInputSchema } from '../inputTypeSchemas/TaskWhereInputSchema'
import { TaskOrderByWithRelationInputSchema } from '../inputTypeSchemas/TaskOrderByWithRelationInputSchema'
import { TaskWhereUniqueInputSchema } from '../inputTypeSchemas/TaskWhereUniqueInputSchema'
import { TaskScalarFieldEnumSchema } from '../inputTypeSchemas/TaskScalarFieldEnumSchema'
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
import { TaskLinkFindManyArgsSchema } from "../outputTypeSchemas/TaskLinkFindManyArgsSchema"
import { ProjectsToTasksFindManyArgsSchema } from "../outputTypeSchemas/ProjectsToTasksFindManyArgsSchema"
import { TaskWorkFindManyArgsSchema } from "../outputTypeSchemas/TaskWorkFindManyArgsSchema"
import { SkillsToTasksFindManyArgsSchema } from "../outputTypeSchemas/SkillsToTasksFindManyArgsSchema"
import { PrioritiesToTasksFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToTasksFindManyArgsSchema"
import { TagsToTasksFindManyArgsSchema } from "../outputTypeSchemas/TagsToTasksFindManyArgsSchema"
import { PrivateTagsToTasksFindManyArgsSchema } from "../outputTypeSchemas/PrivateTagsToTasksFindManyArgsSchema"
import { EnergiesToTasksFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToTasksFindManyArgsSchema"
import { PrivateEnergiesToTasksFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToTasksFindManyArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { TaskCountOutputTypeArgsSchema } from "../outputTypeSchemas/TaskCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskSelectSchema: z.ZodType<Prisma.TaskSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  info: z.boolean().optional(),
  color: z.boolean().optional(),
  links: z.boolean().optional(),
  templateId: z.boolean().optional(),
  personId: z.boolean().optional(),
  public: z.boolean().optional(),
  publicAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  startAt: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  dueAt: z.boolean().optional(),
  endedAt: z.boolean().optional(),
  template: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  precursors: z.union([z.boolean(),z.lazy(() => TaskLinkFindManyArgsSchema)]).optional(),
  successors: z.union([z.boolean(),z.lazy(() => TaskLinkFindManyArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => ProjectsToTasksFindManyArgsSchema)]).optional(),
  work: z.union([z.boolean(),z.lazy(() => TaskWorkFindManyArgsSchema)]).optional(),
  skills: z.union([z.boolean(),z.lazy(() => SkillsToTasksFindManyArgsSchema)]).optional(),
  priorities: z.union([z.boolean(),z.lazy(() => PrioritiesToTasksFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagsToTasksFindManyArgsSchema)]).optional(),
  privateTags: z.union([z.boolean(),z.lazy(() => PrivateTagsToTasksFindManyArgsSchema)]).optional(),
  energies: z.union([z.boolean(),z.lazy(() => EnergiesToTasksFindManyArgsSchema)]).optional(),
  privateEnergies: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToTasksFindManyArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TaskCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TaskFindManyArgsSchema: z.ZodType<Prisma.TaskFindManyArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithRelationInputSchema.array(),TaskOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaskScalarFieldEnumSchema,TaskScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default TaskFindManyArgsSchema;
