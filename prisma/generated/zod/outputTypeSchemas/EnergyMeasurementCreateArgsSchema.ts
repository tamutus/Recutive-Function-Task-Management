import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyMeasurementIncludeSchema } from '../inputTypeSchemas/EnergyMeasurementIncludeSchema'
import { EnergyMeasurementCreateInputSchema } from '../inputTypeSchemas/EnergyMeasurementCreateInputSchema'
import { EnergyMeasurementUncheckedCreateInputSchema } from '../inputTypeSchemas/EnergyMeasurementUncheckedCreateInputSchema'
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

export const EnergyMeasurementCreateArgsSchema: z.ZodType<Prisma.EnergyMeasurementCreateArgs> = z.object({
  select: EnergyMeasurementSelectSchema.optional(),
  include: EnergyMeasurementIncludeSchema.optional(),
  data: z.union([ EnergyMeasurementCreateInputSchema,EnergyMeasurementUncheckedCreateInputSchema ]),
}).strict()

export default EnergyMeasurementCreateArgsSchema;
