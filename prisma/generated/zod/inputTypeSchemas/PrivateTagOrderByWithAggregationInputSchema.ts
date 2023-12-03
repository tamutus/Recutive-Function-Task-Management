import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrivateTagCountOrderByAggregateInputSchema } from './PrivateTagCountOrderByAggregateInputSchema';
import { PrivateTagAvgOrderByAggregateInputSchema } from './PrivateTagAvgOrderByAggregateInputSchema';
import { PrivateTagMaxOrderByAggregateInputSchema } from './PrivateTagMaxOrderByAggregateInputSchema';
import { PrivateTagMinOrderByAggregateInputSchema } from './PrivateTagMinOrderByAggregateInputSchema';
import { PrivateTagSumOrderByAggregateInputSchema } from './PrivateTagSumOrderByAggregateInputSchema';

export const PrivateTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateTagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nsfw: z.lazy(() => SortOrderSchema).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrivateTagCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateTagAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateTagMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateTagSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateTagOrderByWithAggregationInputSchema;
