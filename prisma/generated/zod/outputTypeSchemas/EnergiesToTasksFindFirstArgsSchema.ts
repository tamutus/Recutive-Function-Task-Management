import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTasksIncludeSchema } from '../inputTypeSchemas/EnergiesToTasksIncludeSchema'
import { EnergiesToTasksWhereInputSchema } from '../inputTypeSchemas/EnergiesToTasksWhereInputSchema'
import { EnergiesToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToTasksOrderByWithRelationInputSchema'
import { EnergiesToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToTasksWhereUniqueInputSchema'
import { EnergiesToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToTasksScalarFieldEnumSchema'
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

export const EnergiesToTasksFindFirstArgsSchema: z.ZodType<Prisma.EnergiesToTasksFindFirstArgs> = z.object({
  select: EnergiesToTasksSelectSchema.optional(),
  include: EnergiesToTasksIncludeSchema.optional(),
  where: EnergiesToTasksWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTasksOrderByWithRelationInputSchema.array(),EnergiesToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EnergiesToTasksScalarFieldEnumSchema,EnergiesToTasksScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default EnergiesToTasksFindFirstArgsSchema;
