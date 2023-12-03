import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToPrivateTagsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsMaxOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToPrivateTagsMaxOrderByAggregateInputSchema;
