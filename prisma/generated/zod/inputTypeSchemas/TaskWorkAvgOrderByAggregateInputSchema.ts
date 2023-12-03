import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TaskWorkAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TaskWorkAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TaskWorkAvgOrderByAggregateInputSchema;
