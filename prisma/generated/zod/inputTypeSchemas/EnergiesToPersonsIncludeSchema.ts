import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { EnergyMeasurementFindManyArgsSchema } from "../outputTypeSchemas/EnergyMeasurementFindManyArgsSchema"
import { EnergiesToPersonsCountOutputTypeArgsSchema } from "../outputTypeSchemas/EnergiesToPersonsCountOutputTypeArgsSchema"

export const EnergiesToPersonsIncludeSchema: z.ZodType<Prisma.EnergiesToPersonsInclude> = z.object({
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  measurements: z.union([z.boolean(),z.lazy(() => EnergyMeasurementFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EnergiesToPersonsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default EnergiesToPersonsIncludeSchema;
