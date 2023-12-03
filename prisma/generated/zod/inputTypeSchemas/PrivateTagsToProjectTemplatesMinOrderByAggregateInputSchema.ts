import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToProjectTemplatesMinOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesMinOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  privateTagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToProjectTemplatesMinOrderByAggregateInputSchema;
