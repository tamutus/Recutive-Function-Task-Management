import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToTagsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToTagsSumOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToTagsSumOrderByAggregateInputSchema;
