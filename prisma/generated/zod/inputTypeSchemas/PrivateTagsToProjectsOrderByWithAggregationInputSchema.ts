import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateTagsToProjectsCountOrderByAggregateInputSchema } from './PrivateTagsToProjectsCountOrderByAggregateInputSchema';
import { PrivateTagsToProjectsAvgOrderByAggregateInputSchema } from './PrivateTagsToProjectsAvgOrderByAggregateInputSchema';
import { PrivateTagsToProjectsMaxOrderByAggregateInputSchema } from './PrivateTagsToProjectsMaxOrderByAggregateInputSchema';
import { PrivateTagsToProjectsMinOrderByAggregateInputSchema } from './PrivateTagsToProjectsMinOrderByAggregateInputSchema';
import { PrivateTagsToProjectsSumOrderByAggregateInputSchema } from './PrivateTagsToProjectsSumOrderByAggregateInputSchema';

export const PrivateTagsToProjectsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsOrderByWithAggregationInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrivateTagsToProjectsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateTagsToProjectsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateTagsToProjectsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateTagsToProjectsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateTagsToProjectsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateTagsToProjectsOrderByWithAggregationInputSchema;
