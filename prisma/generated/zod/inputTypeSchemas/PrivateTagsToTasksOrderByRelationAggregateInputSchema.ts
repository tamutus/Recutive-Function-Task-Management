import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToTasksOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToTasksOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToTasksOrderByRelationAggregateInputSchema;
