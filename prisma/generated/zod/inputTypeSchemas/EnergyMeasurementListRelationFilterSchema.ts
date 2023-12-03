import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementWhereInputSchema } from './EnergyMeasurementWhereInputSchema';

export const EnergyMeasurementListRelationFilterSchema: z.ZodType<Prisma.EnergyMeasurementListRelationFilter> = z.object({
  every: z.lazy(() => EnergyMeasurementWhereInputSchema).optional(),
  some: z.lazy(() => EnergyMeasurementWhereInputSchema).optional(),
  none: z.lazy(() => EnergyMeasurementWhereInputSchema).optional()
}).strict();

export default EnergyMeasurementListRelationFilterSchema;
