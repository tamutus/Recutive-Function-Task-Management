import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskWorksIncludeSchema } from '../inputTypeSchemas/EnergiesToTaskWorksIncludeSchema'
import { EnergiesToTaskWorksWhereInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksWhereInputSchema'
import { EnergiesToTaskWorksOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksOrderByWithRelationInputSchema'
import { EnergiesToTaskWorksWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksWhereUniqueInputSchema'
import { EnergiesToTaskWorksScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToTaskWorksScalarFieldEnumSchema'
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

export const EnergiesToTaskWorksFindManyArgsSchema: z.ZodType<Prisma.EnergiesToTaskWorksFindManyArgs> = z.object({
  select: EnergiesToTaskWorksSelectSchema.optional(),
  include: EnergiesToTaskWorksIncludeSchema.optional(),
  where: EnergiesToTaskWorksWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTaskWorksOrderByWithRelationInputSchema.array(),EnergiesToTaskWorksOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToTaskWorksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EnergiesToTaskWorksScalarFieldEnumSchema,EnergiesToTaskWorksScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default EnergiesToTaskWorksFindManyArgsSchema;
