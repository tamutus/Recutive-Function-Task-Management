import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToProjectTemplatesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesMaxOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  privateTagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToProjectTemplatesMaxOrderByAggregateInputSchema;
