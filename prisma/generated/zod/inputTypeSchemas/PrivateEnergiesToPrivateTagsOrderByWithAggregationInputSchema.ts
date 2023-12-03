import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateEnergiesToPrivateTagsCountOrderByAggregateInputSchema } from './PrivateEnergiesToPrivateTagsCountOrderByAggregateInputSchema';
import { PrivateEnergiesToPrivateTagsAvgOrderByAggregateInputSchema } from './PrivateEnergiesToPrivateTagsAvgOrderByAggregateInputSchema';
import { PrivateEnergiesToPrivateTagsMaxOrderByAggregateInputSchema } from './PrivateEnergiesToPrivateTagsMaxOrderByAggregateInputSchema';
import { PrivateEnergiesToPrivateTagsMinOrderByAggregateInputSchema } from './PrivateEnergiesToPrivateTagsMinOrderByAggregateInputSchema';
import { PrivateEnergiesToPrivateTagsSumOrderByAggregateInputSchema } from './PrivateEnergiesToPrivateTagsSumOrderByAggregateInputSchema';

export const PrivateEnergiesToPrivateTagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsOrderByWithAggregationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrivateEnergiesToPrivateTagsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateEnergiesToPrivateTagsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateEnergiesToPrivateTagsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateEnergiesToPrivateTagsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateEnergiesToPrivateTagsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateEnergiesToPrivateTagsOrderByWithAggregationInputSchema;
