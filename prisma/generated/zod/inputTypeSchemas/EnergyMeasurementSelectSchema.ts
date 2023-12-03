import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPersonsArgsSchema } from "../outputTypeSchemas/EnergiesToPersonsArgsSchema"

export const EnergyMeasurementSelectSchema: z.ZodType<Prisma.EnergyMeasurementSelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  measurement: z.boolean().optional(),
  personId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  experience: z.union([z.boolean(),z.lazy(() => EnergiesToPersonsArgsSchema)]).optional(),
}).strict()

export default EnergyMeasurementSelectSchema;
