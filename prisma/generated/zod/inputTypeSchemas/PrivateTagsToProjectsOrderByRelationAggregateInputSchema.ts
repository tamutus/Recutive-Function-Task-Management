import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToProjectsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToProjectsOrderByRelationAggregateInputSchema;
