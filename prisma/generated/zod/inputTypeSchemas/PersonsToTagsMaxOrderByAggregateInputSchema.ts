import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToTagsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToTagsMaxOrderByAggregateInput> = z.object({
  followerId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToTagsMaxOrderByAggregateInputSchema;
