import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrioritiesToProjectsCountOrderByAggregateInputSchema } from './PrioritiesToProjectsCountOrderByAggregateInputSchema';
import { PrioritiesToProjectsAvgOrderByAggregateInputSchema } from './PrioritiesToProjectsAvgOrderByAggregateInputSchema';
import { PrioritiesToProjectsMaxOrderByAggregateInputSchema } from './PrioritiesToProjectsMaxOrderByAggregateInputSchema';
import { PrioritiesToProjectsMinOrderByAggregateInputSchema } from './PrioritiesToProjectsMinOrderByAggregateInputSchema';
import { PrioritiesToProjectsSumOrderByAggregateInputSchema } from './PrioritiesToProjectsSumOrderByAggregateInputSchema';

export const PrioritiesToProjectsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrioritiesToProjectsOrderByWithAggregationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PrioritiesToProjectsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrioritiesToProjectsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrioritiesToProjectsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrioritiesToProjectsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrioritiesToProjectsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrioritiesToProjectsOrderByWithAggregationInputSchema;
