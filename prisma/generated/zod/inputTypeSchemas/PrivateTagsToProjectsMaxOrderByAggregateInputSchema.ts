import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToProjectsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsMaxOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToProjectsMaxOrderByAggregateInputSchema;
