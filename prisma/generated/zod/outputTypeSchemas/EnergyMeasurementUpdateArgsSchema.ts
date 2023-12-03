import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyMeasurementIncludeSchema } from '../inputTypeSchemas/EnergyMeasurementIncludeSchema'
import { EnergyMeasurementUpdateInputSchema } from '../inputTypeSchemas/EnergyMeasurementUpdateInputSchema'
import { EnergyMeasurementUncheckedUpdateInputSchema } from '../inputTypeSchemas/EnergyMeasurementUncheckedUpdateInputSchema'
import { EnergyMeasurementWhereUniqueInputSchema } from '../inputTypeSchemas/EnergyMeasurementWhereUniqueInputSchema'
import { EnergiesToPersonsArgsSchema } from "../outputTypeSchemas/EnergiesToPersonsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergyMeasurementSelectSchema: z.ZodType<Prisma.EnergyMeasurementSelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  measurement: z.boolean().optional(),
  personId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  experience: z.union([z.boolean(),z.lazy(() => EnergiesToPersonsArgsSchema)]).optional(),
}).strict()

export const EnergyMeasurementUpdateArgsSchema: z.ZodType<Prisma.EnergyMeasurementUpdateArgs> = z.object({
  select: EnergyMeasurementSelectSchema.optional(),
  include: EnergyMeasurementIncludeSchema.optional(),
  data: z.union([ EnergyMeasurementUpdateInputSchema,EnergyMeasurementUncheckedUpdateInputSchema ]),
  where: EnergyMeasurementWhereUniqueInputSchema,
}).strict()

export default EnergyMeasurementUpdateArgsSchema;
