import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyMeasurementSelectSchema } from '../inputTypeSchemas/EnergyMeasurementSelectSchema';
import { EnergyMeasurementIncludeSchema } from '../inputTypeSchemas/EnergyMeasurementIncludeSchema';

export const EnergyMeasurementArgsSchema: z.ZodType<Prisma.EnergyMeasurementDefaultArgs> = z.object({
  select: z.lazy(() => EnergyMeasurementSelectSchema).optional(),
  include: z.lazy(() => EnergyMeasurementIncludeSchema).optional(),
}).strict();

export default EnergyMeasurementArgsSchema;
