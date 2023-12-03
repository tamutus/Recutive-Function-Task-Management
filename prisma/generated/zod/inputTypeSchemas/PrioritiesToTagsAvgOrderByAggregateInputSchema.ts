import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToTagsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToTagsAvgOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToTagsAvgOrderByAggregateInputSchema;
