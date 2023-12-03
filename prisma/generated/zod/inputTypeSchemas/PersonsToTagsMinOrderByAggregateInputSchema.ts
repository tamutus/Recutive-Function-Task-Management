import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToTagsMinOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToTagsMinOrderByAggregateInput> = z.object({
  followerId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToTagsMinOrderByAggregateInputSchema;
