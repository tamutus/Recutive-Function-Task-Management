import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToTagsCountOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToTagsCountOrderByAggregateInput> = z.object({
  followerId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToTagsCountOrderByAggregateInputSchema;
