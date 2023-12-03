import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TagsToTasksSumOrderByAggregateInputSchema: z.ZodType<Prisma.TagsToTasksSumOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TagsToTasksSumOrderByAggregateInputSchema;
