import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateEnergiesToTagsCountOrderByAggregateInputSchema } from './PrivateEnergiesToTagsCountOrderByAggregateInputSchema';
import { PrivateEnergiesToTagsAvgOrderByAggregateInputSchema } from './PrivateEnergiesToTagsAvgOrderByAggregateInputSchema';
import { PrivateEnergiesToTagsMaxOrderByAggregateInputSchema } from './PrivateEnergiesToTagsMaxOrderByAggregateInputSchema';
import { PrivateEnergiesToTagsMinOrderByAggregateInputSchema } from './PrivateEnergiesToTagsMinOrderByAggregateInputSchema';
import { PrivateEnergiesToTagsSumOrderByAggregateInputSchema } from './PrivateEnergiesToTagsSumOrderByAggregateInputSchema';

export const PrivateEnergiesToTagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsOrderByWithAggregationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrivateEnergiesToTagsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateEnergiesToTagsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateEnergiesToTagsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateEnergiesToTagsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateEnergiesToTagsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateEnergiesToTagsOrderByWithAggregationInputSchema;
