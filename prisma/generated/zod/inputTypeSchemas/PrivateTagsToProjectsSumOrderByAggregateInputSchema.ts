import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToProjectsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsSumOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToProjectsSumOrderByAggregateInputSchema;
