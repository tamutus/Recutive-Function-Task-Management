import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TagsToTasksCountOrderByAggregateInputSchema: z.ZodType<Prisma.TagsToTasksCountOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TagsToTasksCountOrderByAggregateInputSchema;
