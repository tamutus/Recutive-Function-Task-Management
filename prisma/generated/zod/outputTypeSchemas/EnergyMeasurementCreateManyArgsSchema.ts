import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyMeasurementCreateManyInputSchema } from '../inputTypeSchemas/EnergyMeasurementCreateManyInputSchema'

export const EnergyMeasurementCreateManyArgsSchema: z.ZodType<Prisma.EnergyMeasurementCreateManyArgs> = z.object({
  data: z.union([ EnergyMeasurementCreateManyInputSchema,EnergyMeasurementCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default EnergyMeasurementCreateManyArgsSchema;
