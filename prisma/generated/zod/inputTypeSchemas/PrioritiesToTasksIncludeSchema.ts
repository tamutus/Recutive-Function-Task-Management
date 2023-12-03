import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"

export const PrioritiesToTasksIncludeSchema: z.ZodType<Prisma.PrioritiesToTasksInclude> = z.object({
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export default PrioritiesToTasksIncludeSchema;
