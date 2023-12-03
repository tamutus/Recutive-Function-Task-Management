import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PriorityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PriorityAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PriorityAvgOrderByAggregateInputSchema;
