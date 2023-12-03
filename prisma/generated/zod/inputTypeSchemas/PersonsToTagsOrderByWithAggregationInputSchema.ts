import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PersonsToTagsCountOrderByAggregateInputSchema } from './PersonsToTagsCountOrderByAggregateInputSchema';
import { PersonsToTagsAvgOrderByAggregateInputSchema } from './PersonsToTagsAvgOrderByAggregateInputSchema';
import { PersonsToTagsMaxOrderByAggregateInputSchema } from './PersonsToTagsMaxOrderByAggregateInputSchema';
import { PersonsToTagsMinOrderByAggregateInputSchema } from './PersonsToTagsMinOrderByAggregateInputSchema';
import { PersonsToTagsSumOrderByAggregateInputSchema } from './PersonsToTagsSumOrderByAggregateInputSchema';

export const PersonsToTagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonsToTagsOrderByWithAggregationInput> = z.object({
  followerId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PersonsToTagsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PersonsToTagsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonsToTagsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonsToTagsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PersonsToTagsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PersonsToTagsOrderByWithAggregationInputSchema;
