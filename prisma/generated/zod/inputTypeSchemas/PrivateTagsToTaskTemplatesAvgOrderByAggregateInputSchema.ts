import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToTaskTemplatesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesAvgOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToTaskTemplatesAvgOrderByAggregateInputSchema;
