import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToProjectTemplatesCountOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCountOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  privateTagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToProjectTemplatesCountOrderByAggregateInputSchema;
