import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TaskWorkCountOrderByAggregateInputSchema } from './TaskWorkCountOrderByAggregateInputSchema';
import { TaskWorkAvgOrderByAggregateInputSchema } from './TaskWorkAvgOrderByAggregateInputSchema';
import { TaskWorkMaxOrderByAggregateInputSchema } from './TaskWorkMaxOrderByAggregateInputSchema';
import { TaskWorkMinOrderByAggregateInputSchema } from './TaskWorkMinOrderByAggregateInputSchema';
import { TaskWorkSumOrderByAggregateInputSchema } from './TaskWorkSumOrderByAggregateInputSchema';

export const TaskWorkOrderByWithAggregationInputSchema: z.ZodType<Prisma.TaskWorkOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  startedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  endedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => TaskWorkCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TaskWorkAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TaskWorkMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TaskWorkMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TaskWorkSumOrderByAggregateInputSchema).optional()
}).strict();

export default TaskWorkOrderByWithAggregationInputSchema;
