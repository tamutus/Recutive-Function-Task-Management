import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementCreateManyExperienceInputSchema } from './EnergyMeasurementCreateManyExperienceInputSchema';

export const EnergyMeasurementCreateManyExperienceInputEnvelopeSchema: z.ZodType<Prisma.EnergyMeasurementCreateManyExperienceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergyMeasurementCreateManyExperienceInputSchema),z.lazy(() => EnergyMeasurementCreateManyExperienceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergyMeasurementCreateManyExperienceInputEnvelopeSchema;
