import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTasksIncludeSchema } from '../inputTypeSchemas/EnergiesToTasksIncludeSchema'
import { EnergiesToTasksCreateInputSchema } from '../inputTypeSchemas/EnergiesToTasksCreateInputSchema'
import { EnergiesToTasksUncheckedCreateInputSchema } from '../inputTypeSchemas/EnergiesToTasksUncheckedCreateInputSchema'
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

export const EnergiesToTasksCreateArgsSchema: z.ZodType<Prisma.EnergiesToTasksCreateArgs> = z.object({
  select: EnergiesToTasksSelectSchema.optional(),
  include: EnergiesToTasksIncludeSchema.optional(),
  data: z.union([ EnergiesToTasksCreateInputSchema,EnergiesToTasksUncheckedCreateInputSchema ]),
}).strict()

export default EnergiesToTasksCreateArgsSchema;
