import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkWhereInputSchema } from './TaskWorkWhereInputSchema';

export const TaskWorkListRelationFilterSchema: z.ZodType<Prisma.TaskWorkListRelationFilter> = z.object({
  every: z.lazy(() => TaskWorkWhereInputSchema).optional(),
  some: z.lazy(() => TaskWorkWhereInputSchema).optional(),
  none: z.lazy(() => TaskWorkWhereInputSchema).optional()
}).strict();

export default TaskWorkListRelationFilterSchema;
