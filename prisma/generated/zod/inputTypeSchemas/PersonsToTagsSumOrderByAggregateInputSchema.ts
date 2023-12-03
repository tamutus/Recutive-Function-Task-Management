import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToTagsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToTagsSumOrderByAggregateInput> = z.object({
  followerId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToTagsSumOrderByAggregateInputSchema;
