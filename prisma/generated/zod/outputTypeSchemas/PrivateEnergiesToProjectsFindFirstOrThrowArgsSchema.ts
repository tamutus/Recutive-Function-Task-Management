import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsIncludeSchema'
import { PrivateEnergiesToProjectsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsWhereInputSchema'
import { PrivateEnergiesToProjectsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsOrderByWithRelationInputSchema'
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsWhereUniqueInputSchema'
import { PrivateEnergiesToProjectsScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsScalarFieldEnumSchema'
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateEnergiesToProjectsSelectSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsSelect> = z.object({
  projectId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  notes: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
}).strict()

export const PrivateEnergiesToProjectsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsFindFirstOrThrowArgs> = z.object({
  select: PrivateEnergiesToProjectsSelectSchema.optional(),
  include: PrivateEnergiesToProjectsIncludeSchema.optional(),
  where: PrivateEnergiesToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToProjectsOrderByWithRelationInputSchema.array(),PrivateEnergiesToProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateEnergiesToProjectsScalarFieldEnumSchema,PrivateEnergiesToProjectsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateEnergiesToProjectsFindFirstOrThrowArgsSchema;
