import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"

export const SkillsToTasksSelectSchema: z.ZodType<Prisma.SkillsToTasksSelect> = z.object({
  taskId: z.boolean().optional(),
  skillId: z.boolean().optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export default SkillsToTasksSelectSchema;
