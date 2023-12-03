import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrioritiesToTagsCountOrderByAggregateInputSchema } from './PrioritiesToTagsCountOrderByAggregateInputSchema';
import { PrioritiesToTagsAvgOrderByAggregateInputSchema } from './PrioritiesToTagsAvgOrderByAggregateInputSchema';
import { PrioritiesToTagsMaxOrderByAggregateInputSchema } from './PrioritiesToTagsMaxOrderByAggregateInputSchema';
import { PrioritiesToTagsMinOrderByAggregateInputSchema } from './PrioritiesToTagsMinOrderByAggregateInputSchema';
import { PrioritiesToTagsSumOrderByAggregateInputSchema } from './PrioritiesToTagsSumOrderByAggregateInputSchema';

export const PrioritiesToTagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrioritiesToTagsOrderByWithAggregationInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PrioritiesToTagsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrioritiesToTagsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrioritiesToTagsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrioritiesToTagsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrioritiesToTagsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrioritiesToTagsOrderByWithAggregationInputSchema;
