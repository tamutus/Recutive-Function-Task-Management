import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { TaskWorkArgsSchema } from "../outputTypeSchemas/TaskWorkArgsSchema"

export const EnergiesToTaskWorksSelectSchema: z.ZodType<Prisma.EnergiesToTaskWorksSelect> = z.object({
  energyId: z.boolean().optional(),
  workId: z.boolean().optional(),
  startingValue: z.boolean().optional(),
  endingValue: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  work: z.union([z.boolean(),z.lazy(() => TaskWorkArgsSchema)]).optional(),
}).strict()

export default EnergiesToTaskWorksSelectSchema;
