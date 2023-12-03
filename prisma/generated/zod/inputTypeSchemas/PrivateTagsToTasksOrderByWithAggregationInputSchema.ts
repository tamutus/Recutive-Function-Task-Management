import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateTagsToTasksCountOrderByAggregateInputSchema } from './PrivateTagsToTasksCountOrderByAggregateInputSchema';
import { PrivateTagsToTasksAvgOrderByAggregateInputSchema } from './PrivateTagsToTasksAvgOrderByAggregateInputSchema';
import { PrivateTagsToTasksMaxOrderByAggregateInputSchema } from './PrivateTagsToTasksMaxOrderByAggregateInputSchema';
import { PrivateTagsToTasksMinOrderByAggregateInputSchema } from './PrivateTagsToTasksMinOrderByAggregateInputSchema';
import { PrivateTagsToTasksSumOrderByAggregateInputSchema } from './PrivateTagsToTasksSumOrderByAggregateInputSchema';

export const PrivateTagsToTasksOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateTagsToTasksOrderByWithAggregationInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrivateTagsToTasksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateTagsToTasksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateTagsToTasksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateTagsToTasksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateTagsToTasksSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateTagsToTasksOrderByWithAggregationInputSchema;
