import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToProjectTemplatesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToProjectTemplatesOrderByRelationAggregateInputSchema;
