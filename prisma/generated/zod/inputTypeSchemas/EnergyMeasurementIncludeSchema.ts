import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPersonsArgsSchema } from "../outputTypeSchemas/EnergiesToPersonsArgsSchema"

export const EnergyMeasurementIncludeSchema: z.ZodType<Prisma.EnergyMeasurementInclude> = z.object({
  experience: z.union([z.boolean(),z.lazy(() => EnergiesToPersonsArgsSchema)]).optional(),
}).strict()

export default EnergyMeasurementIncludeSchema;
