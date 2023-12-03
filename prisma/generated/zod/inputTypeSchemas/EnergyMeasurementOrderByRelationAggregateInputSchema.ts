import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergyMeasurementOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EnergyMeasurementOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergyMeasurementOrderByRelationAggregateInputSchema;
