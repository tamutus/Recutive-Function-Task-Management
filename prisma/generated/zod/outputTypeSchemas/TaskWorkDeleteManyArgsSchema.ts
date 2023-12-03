import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWorkWhereInputSchema } from '../inputTypeSchemas/TaskWorkWhereInputSchema'

export const TaskWorkDeleteManyArgsSchema: z.ZodType<Prisma.TaskWorkDeleteManyArgs> = z.object({
  where: TaskWorkWhereInputSchema.optional(),
}).strict()

export default TaskWorkDeleteManyArgsSchema;
