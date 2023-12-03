import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTasksIncludeSchema } from '../inputTypeSchemas/SkillsToTasksIncludeSchema'
import { SkillsToTasksCreateInputSchema } from '../inputTypeSchemas/SkillsToTasksCreateInputSchema'
import { SkillsToTasksUncheckedCreateInputSchema } from '../inputTypeSchemas/SkillsToTasksUncheckedCreateInputSchema'
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SkillsToTasksSelectSchema: z.ZodType<Prisma.SkillsToTasksSelect> = z.object({
  taskId: z.boolean().optional(),
  skillId: z.boolean().optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export const SkillsToTasksCreateArgsSchema: z.ZodType<Prisma.SkillsToTasksCreateArgs> = z.object({
  select: SkillsToTasksSelectSchema.optional(),
  include: SkillsToTasksIncludeSchema.optional(),
  data: z.union([ SkillsToTasksCreateInputSchema,SkillsToTasksUncheckedCreateInputSchema ]),
}).strict()

export default SkillsToTasksCreateArgsSchema;
