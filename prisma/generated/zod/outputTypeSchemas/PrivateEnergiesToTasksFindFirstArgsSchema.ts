import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTasksIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksIncludeSchema'
import { PrivateEnergiesToTasksWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksWhereInputSchema'
import { PrivateEnergiesToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksOrderByWithRelationInputSchema'
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksWhereUniqueInputSchema'
import { PrivateEnergiesToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksScalarFieldEnumSchema'
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

export const PrivateEnergiesToTasksFindFirstArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTasksFindFirstArgs> = z.object({
  select: PrivateEnergiesToTasksSelectSchema.optional(),
  include: PrivateEnergiesToTasksIncludeSchema.optional(),
  where: PrivateEnergiesToTasksWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTasksOrderByWithRelationInputSchema.array(),PrivateEnergiesToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateEnergiesToTasksScalarFieldEnumSchema,PrivateEnergiesToTasksScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateEnergiesToTasksFindFirstArgsSchema;
