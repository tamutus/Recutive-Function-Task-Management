import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskLinkWhereInputSchema } from '../inputTypeSchemas/TaskLinkWhereInputSchema'

export const TaskLinkDeleteManyArgsSchema: z.ZodType<Prisma.TaskLinkDeleteManyArgs> = z.object({
  where: TaskLinkWhereInputSchema.optional(),
}).strict()

export default TaskLinkDeleteManyArgsSchema;
