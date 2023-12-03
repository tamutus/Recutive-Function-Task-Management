import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EnergiesToTagsCountOrderByAggregateInputSchema } from './EnergiesToTagsCountOrderByAggregateInputSchema';
import { EnergiesToTagsAvgOrderByAggregateInputSchema } from './EnergiesToTagsAvgOrderByAggregateInputSchema';
import { EnergiesToTagsMaxOrderByAggregateInputSchema } from './EnergiesToTagsMaxOrderByAggregateInputSchema';
import { EnergiesToTagsMinOrderByAggregateInputSchema } from './EnergiesToTagsMinOrderByAggregateInputSchema';
import { EnergiesToTagsSumOrderByAggregateInputSchema } from './EnergiesToTagsSumOrderByAggregateInputSchema';

export const EnergiesToTagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.EnergiesToTagsOrderByWithAggregationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => EnergiesToTagsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EnergiesToTagsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EnergiesToTagsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EnergiesToTagsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EnergiesToTagsSumOrderByAggregateInputSchema).optional()
}).strict();

export default EnergiesToTagsOrderByWithAggregationInputSchema;
