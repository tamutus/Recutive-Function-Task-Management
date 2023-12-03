import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrioritiesToTasksCountOrderByAggregateInputSchema } from './PrioritiesToTasksCountOrderByAggregateInputSchema';
import { PrioritiesToTasksAvgOrderByAggregateInputSchema } from './PrioritiesToTasksAvgOrderByAggregateInputSchema';
import { PrioritiesToTasksMaxOrderByAggregateInputSchema } from './PrioritiesToTasksMaxOrderByAggregateInputSchema';
import { PrioritiesToTasksMinOrderByAggregateInputSchema } from './PrioritiesToTasksMinOrderByAggregateInputSchema';
import { PrioritiesToTasksSumOrderByAggregateInputSchema } from './PrioritiesToTasksSumOrderByAggregateInputSchema';

export const PrioritiesToTasksOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrioritiesToTasksOrderByWithAggregationInput> = z.object({
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PrioritiesToTasksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrioritiesToTasksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrioritiesToTasksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrioritiesToTasksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrioritiesToTasksSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrioritiesToTasksOrderByWithAggregationInputSchema;
