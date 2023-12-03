import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EnergyCountOrderByAggregateInputSchema } from './EnergyCountOrderByAggregateInputSchema';
import { EnergyAvgOrderByAggregateInputSchema } from './EnergyAvgOrderByAggregateInputSchema';
import { EnergyMaxOrderByAggregateInputSchema } from './EnergyMaxOrderByAggregateInputSchema';
import { EnergyMinOrderByAggregateInputSchema } from './EnergyMinOrderByAggregateInputSchema';
import { EnergySumOrderByAggregateInputSchema } from './EnergySumOrderByAggregateInputSchema';

export const EnergyOrderByWithAggregationInputSchema: z.ZodType<Prisma.EnergyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  unit: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  music: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EnergyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EnergyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EnergyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EnergyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EnergySumOrderByAggregateInputSchema).optional()
}).strict();

export default EnergyOrderByWithAggregationInputSchema;
