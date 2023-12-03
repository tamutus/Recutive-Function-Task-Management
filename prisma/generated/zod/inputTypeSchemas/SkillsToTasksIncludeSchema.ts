import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"

export const SkillsToTasksIncludeSchema: z.ZodType<Prisma.SkillsToTasksInclude> = z.object({
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export default SkillsToTasksIncludeSchema;
