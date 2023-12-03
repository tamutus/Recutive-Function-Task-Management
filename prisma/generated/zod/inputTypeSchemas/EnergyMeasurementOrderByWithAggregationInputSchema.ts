import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { EnergyMeasurementCountOrderByAggregateInputSchema } from './EnergyMeasurementCountOrderByAggregateInputSchema';
import { EnergyMeasurementAvgOrderByAggregateInputSchema } from './EnergyMeasurementAvgOrderByAggregateInputSchema';
import { EnergyMeasurementMaxOrderByAggregateInputSchema } from './EnergyMeasurementMaxOrderByAggregateInputSchema';
import { EnergyMeasurementMinOrderByAggregateInputSchema } from './EnergyMeasurementMinOrderByAggregateInputSchema';
import { EnergyMeasurementSumOrderByAggregateInputSchema } from './EnergyMeasurementSumOrderByAggregateInputSchema';

export const EnergyMeasurementOrderByWithAggregationInputSchema: z.ZodType<Prisma.EnergyMeasurementOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  measurement: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EnergyMeasurementCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EnergyMeasurementAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EnergyMeasurementMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EnergyMeasurementMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EnergyMeasurementSumOrderByAggregateInputSchema).optional()
}).strict();

export default EnergyMeasurementOrderByWithAggregationInputSchema;
