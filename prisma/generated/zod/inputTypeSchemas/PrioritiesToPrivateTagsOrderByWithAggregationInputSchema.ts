import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrioritiesToPrivateTagsCountOrderByAggregateInputSchema } from './PrioritiesToPrivateTagsCountOrderByAggregateInputSchema';
import { PrioritiesToPrivateTagsAvgOrderByAggregateInputSchema } from './PrioritiesToPrivateTagsAvgOrderByAggregateInputSchema';
import { PrioritiesToPrivateTagsMaxOrderByAggregateInputSchema } from './PrioritiesToPrivateTagsMaxOrderByAggregateInputSchema';
import { PrioritiesToPrivateTagsMinOrderByAggregateInputSchema } from './PrioritiesToPrivateTagsMinOrderByAggregateInputSchema';
import { PrioritiesToPrivateTagsSumOrderByAggregateInputSchema } from './PrioritiesToPrivateTagsSumOrderByAggregateInputSchema';

export const PrioritiesToPrivateTagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsOrderByWithAggregationInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PrioritiesToPrivateTagsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrioritiesToPrivateTagsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrioritiesToPrivateTagsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrioritiesToPrivateTagsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrioritiesToPrivateTagsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrioritiesToPrivateTagsOrderByWithAggregationInputSchema;
