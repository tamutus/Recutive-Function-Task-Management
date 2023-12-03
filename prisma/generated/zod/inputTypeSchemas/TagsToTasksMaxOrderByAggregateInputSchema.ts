import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TagsToTasksMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TagsToTasksMaxOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TagsToTasksMaxOrderByAggregateInputSchema;
