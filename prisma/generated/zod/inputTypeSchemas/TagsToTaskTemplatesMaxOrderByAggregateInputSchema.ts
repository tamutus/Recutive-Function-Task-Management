import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TagsToTaskTemplatesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesMaxOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TagsToTaskTemplatesMaxOrderByAggregateInputSchema;
