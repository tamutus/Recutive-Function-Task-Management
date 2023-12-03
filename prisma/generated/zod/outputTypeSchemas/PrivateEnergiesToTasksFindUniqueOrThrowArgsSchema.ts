import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTasksIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksIncludeSchema'
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksWhereUniqueInputSchema'
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateEnergiesToTasksSelectSchema: z.ZodType<Prisma.PrivateEnergiesToTasksSelect> = z.object({
  energyId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  notes: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export const PrivateEnergiesToTasksFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTasksFindUniqueOrThrowArgs> = z.object({
  select: PrivateEnergiesToTasksSelectSchema.optional(),
  include: PrivateEnergiesToTasksIncludeSchema.optional(),
  where: PrivateEnergiesToTasksWhereUniqueInputSchema,
}).strict()

export default PrivateEnergiesToTasksFindUniqueOrThrowArgsSchema;
