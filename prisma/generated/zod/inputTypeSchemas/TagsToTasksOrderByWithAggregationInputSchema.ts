import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TagsToTasksCountOrderByAggregateInputSchema } from './TagsToTasksCountOrderByAggregateInputSchema';
import { TagsToTasksAvgOrderByAggregateInputSchema } from './TagsToTasksAvgOrderByAggregateInputSchema';
import { TagsToTasksMaxOrderByAggregateInputSchema } from './TagsToTasksMaxOrderByAggregateInputSchema';
import { TagsToTasksMinOrderByAggregateInputSchema } from './TagsToTasksMinOrderByAggregateInputSchema';
import { TagsToTasksSumOrderByAggregateInputSchema } from './TagsToTasksSumOrderByAggregateInputSchema';

export const TagsToTasksOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagsToTasksOrderByWithAggregationInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagsToTasksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TagsToTasksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagsToTasksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagsToTasksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TagsToTasksSumOrderByAggregateInputSchema).optional()
}).strict();

export default TagsToTasksOrderByWithAggregationInputSchema;
