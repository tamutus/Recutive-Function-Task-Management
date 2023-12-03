import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PriorityCountOrderByAggregateInputSchema } from './PriorityCountOrderByAggregateInputSchema';
import { PriorityAvgOrderByAggregateInputSchema } from './PriorityAvgOrderByAggregateInputSchema';
import { PriorityMaxOrderByAggregateInputSchema } from './PriorityMaxOrderByAggregateInputSchema';
import { PriorityMinOrderByAggregateInputSchema } from './PriorityMinOrderByAggregateInputSchema';
import { PrioritySumOrderByAggregateInputSchema } from './PrioritySumOrderByAggregateInputSchema';

export const PriorityOrderByWithAggregationInputSchema: z.ZodType<Prisma.PriorityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PriorityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PriorityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PriorityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PriorityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrioritySumOrderByAggregateInputSchema).optional()
}).strict();

export default PriorityOrderByWithAggregationInputSchema;
