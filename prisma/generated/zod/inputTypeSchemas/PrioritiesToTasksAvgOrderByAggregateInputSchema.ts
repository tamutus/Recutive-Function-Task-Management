import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToTasksAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToTasksAvgOrderByAggregateInput> = z.object({
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToTasksAvgOrderByAggregateInputSchema;
