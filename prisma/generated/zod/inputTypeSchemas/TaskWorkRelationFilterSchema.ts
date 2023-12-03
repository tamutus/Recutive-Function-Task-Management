import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkWhereInputSchema } from './TaskWorkWhereInputSchema';

export const TaskWorkRelationFilterSchema: z.ZodType<Prisma.TaskWorkRelationFilter> = z.object({
  is: z.lazy(() => TaskWorkWhereInputSchema).optional(),
  isNot: z.lazy(() => TaskWorkWhereInputSchema).optional()
}).strict();

export default TaskWorkRelationFilterSchema;
