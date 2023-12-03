import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EnergiesToPrivateTagsCountOrderByAggregateInputSchema } from './EnergiesToPrivateTagsCountOrderByAggregateInputSchema';
import { EnergiesToPrivateTagsAvgOrderByAggregateInputSchema } from './EnergiesToPrivateTagsAvgOrderByAggregateInputSchema';
import { EnergiesToPrivateTagsMaxOrderByAggregateInputSchema } from './EnergiesToPrivateTagsMaxOrderByAggregateInputSchema';
import { EnergiesToPrivateTagsMinOrderByAggregateInputSchema } from './EnergiesToPrivateTagsMinOrderByAggregateInputSchema';
import { EnergiesToPrivateTagsSumOrderByAggregateInputSchema } from './EnergiesToPrivateTagsSumOrderByAggregateInputSchema';

export const EnergiesToPrivateTagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsOrderByWithAggregationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => EnergiesToPrivateTagsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EnergiesToPrivateTagsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EnergiesToPrivateTagsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EnergiesToPrivateTagsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EnergiesToPrivateTagsSumOrderByAggregateInputSchema).optional()
}).strict();

export default EnergiesToPrivateTagsOrderByWithAggregationInputSchema;
