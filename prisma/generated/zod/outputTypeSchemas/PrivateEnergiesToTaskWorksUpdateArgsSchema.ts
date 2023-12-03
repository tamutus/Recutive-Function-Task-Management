import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskWorksIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksIncludeSchema'
import { PrivateEnergiesToTaskWorksUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksUpdateInputSchema'
import { PrivateEnergiesToTaskWorksUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksUncheckedUpdateInputSchema'
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksWhereUniqueInputSchema'
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
import { TaskWorkArgsSchema } from "../outputTypeSchemas/TaskWorkArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateEnergiesToTaskWorksSelectSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksSelect> = z.object({
  energyId: z.boolean().optional(),
  workId: z.boolean().optional(),
  startingValue: z.boolean().optional(),
  endingValue: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
  work: z.union([z.boolean(),z.lazy(() => TaskWorkArgsSchema)]).optional(),
}).strict()

export const PrivateEnergiesToTaskWorksUpdateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUpdateArgs> = z.object({
  select: PrivateEnergiesToTaskWorksSelectSchema.optional(),
  include: PrivateEnergiesToTaskWorksIncludeSchema.optional(),
  data: z.union([ PrivateEnergiesToTaskWorksUpdateInputSchema,PrivateEnergiesToTaskWorksUncheckedUpdateInputSchema ]),
  where: PrivateEnergiesToTaskWorksWhereUniqueInputSchema,
}).strict()

export default PrivateEnergiesToTaskWorksUpdateArgsSchema;
