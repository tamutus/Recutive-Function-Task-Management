import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToTaskTemplatesMinOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesMinOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToTaskTemplatesMinOrderByAggregateInputSchema;
