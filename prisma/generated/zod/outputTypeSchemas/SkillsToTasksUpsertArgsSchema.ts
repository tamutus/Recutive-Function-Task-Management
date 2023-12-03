import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTasksIncludeSchema } from '../inputTypeSchemas/SkillsToTasksIncludeSchema'
import { SkillsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToTasksWhereUniqueInputSchema'
import { SkillsToTasksCreateInputSchema } from '../inputTypeSchemas/SkillsToTasksCreateInputSchema'
import { SkillsToTasksUncheckedCreateInputSchema } from '../inputTypeSchemas/SkillsToTasksUncheckedCreateInputSchema'
import { SkillsToTasksUpdateInputSchema } from '../inputTypeSchemas/SkillsToTasksUpdateInputSchema'
import { SkillsToTasksUncheckedUpdateInputSchema } from '../inputTypeSchemas/SkillsToTasksUncheckedUpdateInputSchema'
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

export const SkillsToTasksUpsertArgsSchema: z.ZodType<Prisma.SkillsToTasksUpsertArgs> = z.object({
  select: SkillsToTasksSelectSchema.optional(),
  include: SkillsToTasksIncludeSchema.optional(),
  where: SkillsToTasksWhereUniqueInputSchema,
  create: z.union([ SkillsToTasksCreateInputSchema,SkillsToTasksUncheckedCreateInputSchema ]),
  update: z.union([ SkillsToTasksUpdateInputSchema,SkillsToTasksUncheckedUpdateInputSchema ]),
}).strict()

export default SkillsToTasksUpsertArgsSchema;
