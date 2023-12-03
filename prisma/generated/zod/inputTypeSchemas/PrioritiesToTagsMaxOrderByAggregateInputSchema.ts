import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToTagsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToTagsMaxOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToTagsMaxOrderByAggregateInputSchema;
