import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskWorksIncludeSchema } from '../inputTypeSchemas/EnergiesToTaskWorksIncludeSchema'
import { EnergiesToTaskWorksCreateInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksCreateInputSchema'
import { EnergiesToTaskWorksUncheckedCreateInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksUncheckedCreateInputSchema'
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { TaskWorkArgsSchema } from "../outputTypeSchemas/TaskWorkArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergiesToTaskWorksSelectSchema: z.ZodType<Prisma.EnergiesToTaskWorksSelect> = z.object({
  energyId: z.boolean().optional(),
  workId: z.boolean().optional(),
  startingValue: z.boolean().optional(),
  endingValue: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  work: z.union([z.boolean(),z.lazy(() => TaskWorkArgsSchema)]).optional(),
}).strict()

export const EnergiesToTaskWorksCreateArgsSchema: z.ZodType<Prisma.EnergiesToTaskWorksCreateArgs> = z.object({
  select: EnergiesToTaskWorksSelectSchema.optional(),
  include: EnergiesToTaskWorksIncludeSchema.optional(),
  data: z.union([ EnergiesToTaskWorksCreateInputSchema,EnergiesToTaskWorksUncheckedCreateInputSchema ]),
}).strict()

export default EnergiesToTaskWorksCreateArgsSchema;