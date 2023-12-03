import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTasksIncludeSchema } from '../inputTypeSchemas/SkillsToTasksIncludeSchema'
import { SkillsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToTasksWhereUniqueInputSchema'
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

export const SkillsToTasksFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SkillsToTasksFindUniqueOrThrowArgs> = z.object({
  select: SkillsToTasksSelectSchema.optional(),
  include: SkillsToTasksIncludeSchema.optional(),
  where: SkillsToTasksWhereUniqueInputSchema,
}).strict()

export default SkillsToTasksFindUniqueOrThrowArgsSchema;
