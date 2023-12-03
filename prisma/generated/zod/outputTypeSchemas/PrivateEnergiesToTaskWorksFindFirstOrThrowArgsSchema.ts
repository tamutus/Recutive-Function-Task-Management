import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskWorksIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksIncludeSchema'
import { PrivateEnergiesToTaskWorksWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksWhereInputSchema'
import { PrivateEnergiesToTaskWorksOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksOrderByWithRelationInputSchema'
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksWhereUniqueInputSchema'
import { PrivateEnergiesToTaskWorksScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksScalarFieldEnumSchema'
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

export const PrivateEnergiesToTaskWorksFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksFindFirstOrThrowArgs> = z.object({
  select: PrivateEnergiesToTaskWorksSelectSchema.optional(),
  include: PrivateEnergiesToTaskWorksIncludeSchema.optional(),
  where: PrivateEnergiesToTaskWorksWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTaskWorksOrderByWithRelationInputSchema.array(),PrivateEnergiesToTaskWorksOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToTaskWorksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateEnergiesToTaskWorksScalarFieldEnumSchema,PrivateEnergiesToTaskWorksScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateEnergiesToTaskWorksFindFirstOrThrowArgsSchema;
