import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPersonsIncludeSchema } from '../inputTypeSchemas/EnergiesToPersonsIncludeSchema'
import { EnergiesToPersonsCreateInputSchema } from '../inputTypeSchemas/EnergiesToPersonsCreateInputSchema'
import { EnergiesToPersonsUncheckedCreateInputSchema } from '../inputTypeSchemas/EnergiesToPersonsUncheckedCreateInputSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { EnergyMeasurementFindManyArgsSchema } from "../outputTypeSchemas/EnergyMeasurementFindManyArgsSchema"
import { EnergiesToPersonsCountOutputTypeArgsSchema } from "../outputTypeSchemas/EnergiesToPersonsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergiesToPersonsSelectSchema: z.ZodType<Prisma.EnergiesToPersonsSelect> = z.object({
  personId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  measurements: z.union([z.boolean(),z.lazy(() => EnergyMeasurementFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EnergiesToPersonsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const EnergiesToPersonsCreateArgsSchema: z.ZodType<Prisma.EnergiesToPersonsCreateArgs> = z.object({
  select: EnergiesToPersonsSelectSchema.optional(),
  include: EnergiesToPersonsIncludeSchema.optional(),
  data: z.union([ EnergiesToPersonsCreateInputSchema,EnergiesToPersonsUncheckedCreateInputSchema ]),
}).strict()

export default EnergiesToPersonsCreateArgsSchema;
