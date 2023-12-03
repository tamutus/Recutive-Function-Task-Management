import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToTasksMinOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToTasksMinOrderByAggregateInput> = z.object({
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToTasksMinOrderByAggregateInputSchema;
