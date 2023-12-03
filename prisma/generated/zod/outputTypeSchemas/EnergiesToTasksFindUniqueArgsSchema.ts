import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTasksIncludeSchema } from '../inputTypeSchemas/EnergiesToTasksIncludeSchema'
import { EnergiesToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToTasksWhereUniqueInputSchema'
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergiesToTasksSelectSchema: z.ZodType<Prisma.EnergiesToTasksSelect> = z.object({
  energyId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  notes: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export const EnergiesToTasksFindUniqueArgsSchema: z.ZodType<Prisma.EnergiesToTasksFindUniqueArgs> = z.object({
  select: EnergiesToTasksSelectSchema.optional(),
  include: EnergiesToTasksIncludeSchema.optional(),
  where: EnergiesToTasksWhereUniqueInputSchema,
}).strict()

export default EnergiesToTasksFindUniqueArgsSchema;
