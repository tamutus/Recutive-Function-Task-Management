import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToPrivateTagsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsSumOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToPrivateTagsSumOrderByAggregateInputSchema;
