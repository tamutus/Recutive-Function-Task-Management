import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TaskLinkCountOrderByAggregateInputSchema } from './TaskLinkCountOrderByAggregateInputSchema';
import { TaskLinkAvgOrderByAggregateInputSchema } from './TaskLinkAvgOrderByAggregateInputSchema';
import { TaskLinkMaxOrderByAggregateInputSchema } from './TaskLinkMaxOrderByAggregateInputSchema';
import { TaskLinkMinOrderByAggregateInputSchema } from './TaskLinkMinOrderByAggregateInputSchema';
import { TaskLinkSumOrderByAggregateInputSchema } from './TaskLinkSumOrderByAggregateInputSchema';

export const TaskLinkOrderByWithAggregationInputSchema: z.ZodType<Prisma.TaskLinkOrderByWithAggregationInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  linkType: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TaskLinkCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TaskLinkAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TaskLinkMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TaskLinkMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TaskLinkSumOrderByAggregateInputSchema).optional()
}).strict();

export default TaskLinkOrderByWithAggregationInputSchema;
