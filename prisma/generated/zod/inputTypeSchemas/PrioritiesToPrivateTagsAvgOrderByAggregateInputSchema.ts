import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToPrivateTagsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsAvgOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToPrivateTagsAvgOrderByAggregateInputSchema;
