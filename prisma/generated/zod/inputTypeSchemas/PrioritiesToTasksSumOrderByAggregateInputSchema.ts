import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToTasksSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToTasksSumOrderByAggregateInput> = z.object({
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToTasksSumOrderByAggregateInputSchema;
