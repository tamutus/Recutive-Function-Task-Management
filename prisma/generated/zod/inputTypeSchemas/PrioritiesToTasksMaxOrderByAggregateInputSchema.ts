import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToTasksMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToTasksMaxOrderByAggregateInput> = z.object({
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToTasksMaxOrderByAggregateInputSchema;
