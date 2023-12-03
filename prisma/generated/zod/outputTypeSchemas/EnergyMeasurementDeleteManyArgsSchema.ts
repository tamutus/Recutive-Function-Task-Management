import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyMeasurementWhereInputSchema } from '../inputTypeSchemas/EnergyMeasurementWhereInputSchema'

export const EnergyMeasurementDeleteManyArgsSchema: z.ZodType<Prisma.EnergyMeasurementDeleteManyArgs> = z.object({
  where: EnergyMeasurementWhereInputSchema.optional(),
}).strict()

export default EnergyMeasurementDeleteManyArgsSchema;
