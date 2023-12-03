import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"

export const TaskLinkSelectSchema: z.ZodType<Prisma.TaskLinkSelect> = z.object({
  precursorId: z.boolean().optional(),
  successorId: z.boolean().optional(),
  linkType: z.boolean().optional(),
  precursor: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
  successor: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export default TaskLinkSelectSchema;
