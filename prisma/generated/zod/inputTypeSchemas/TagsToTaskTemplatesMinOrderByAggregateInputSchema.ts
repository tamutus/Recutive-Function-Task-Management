import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TagsToTaskTemplatesMinOrderByAggregateInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesMinOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TagsToTaskTemplatesMinOrderByAggregateInputSchema;
