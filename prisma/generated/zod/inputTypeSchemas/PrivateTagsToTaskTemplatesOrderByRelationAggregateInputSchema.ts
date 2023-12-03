import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToTaskTemplatesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToTaskTemplatesOrderByRelationAggregateInputSchema;
