import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToProjectsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsAvgOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToProjectsAvgOrderByAggregateInputSchema;
