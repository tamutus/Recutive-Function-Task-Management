import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"

export const TaskLinkIncludeSchema: z.ZodType<Prisma.TaskLinkInclude> = z.object({
  precursor: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
  successor: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export default TaskLinkIncludeSchema;
