import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { EnergyMeasurementFindManyArgsSchema } from "../outputTypeSchemas/EnergyMeasurementFindManyArgsSchema"
import { EnergiesToPersonsCountOutputTypeArgsSchema } from "../outputTypeSchemas/EnergiesToPersonsCountOutputTypeArgsSchema"

export const EnergiesToPersonsSelectSchema: z.ZodType<Prisma.EnergiesToPersonsSelect> = z.object({
  personId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  measurements: z.union([z.boolean(),z.lazy(() => EnergyMeasurementFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EnergiesToPersonsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default EnergiesToPersonsSelectSchema;
