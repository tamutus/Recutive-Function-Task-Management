import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrivateEnergyCountOrderByAggregateInputSchema } from './PrivateEnergyCountOrderByAggregateInputSchema';
import { PrivateEnergyAvgOrderByAggregateInputSchema } from './PrivateEnergyAvgOrderByAggregateInputSchema';
import { PrivateEnergyMaxOrderByAggregateInputSchema } from './PrivateEnergyMaxOrderByAggregateInputSchema';
import { PrivateEnergyMinOrderByAggregateInputSchema } from './PrivateEnergyMinOrderByAggregateInputSchema';
import { PrivateEnergySumOrderByAggregateInputSchema } from './PrivateEnergySumOrderByAggregateInputSchema';

export const PrivateEnergyOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateEnergyOrderByWithAggregationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  unit: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  music: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrivateEnergyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateEnergyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateEnergyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateEnergyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateEnergySumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateEnergyOrderByWithAggregationInputSchema;
