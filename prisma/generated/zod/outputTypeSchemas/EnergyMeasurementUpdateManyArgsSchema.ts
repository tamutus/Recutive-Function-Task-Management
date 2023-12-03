import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyMeasurementUpdateManyMutationInputSchema } from '../inputTypeSchemas/EnergyMeasurementUpdateManyMutationInputSchema'
import { EnergyMeasurementUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EnergyMeasurementUncheckedUpdateManyInputSchema'
import { EnergyMeasurementWhereInputSchema } from '../inputTypeSchemas/EnergyMeasurementWhereInputSchema'

export const EnergyMeasurementUpdateManyArgsSchema: z.ZodType<Prisma.EnergyMeasurementUpdateManyArgs> = z.object({
  data: z.union([ EnergyMeasurementUpdateManyMutationInputSchema,EnergyMeasurementUncheckedUpdateManyInputSchema ]),
  where: EnergyMeasurementWhereInputSchema.optional(),
}).strict()

export default EnergyMeasurementUpdateManyArgsSchema;
