import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectsIncludeSchema } from '../inputTypeSchemas/EnergiesToProjectsIncludeSchema'
import { EnergiesToProjectsWhereInputSchema } from '../inputTypeSchemas/EnergiesToProjectsWhereInputSchema'
import { EnergiesToProjectsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToProjectsOrderByWithRelationInputSchema'
import { EnergiesToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToProjectsWhereUniqueInputSchema'
import { EnergiesToProjectsScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToProjectsScalarFieldEnumSchema'
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergiesToProjectsSelectSchema: z.ZodType<Prisma.EnergiesToProjectsSelect> = z.object({
  projectId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  info: z.boolean().optional(),
  links: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
}).strict()

export const EnergiesToProjectsFindFirstArgsSchema: z.ZodType<Prisma.EnergiesToProjectsFindFirstArgs> = z.object({
  select: EnergiesToProjectsSelectSchema.optional(),
  include: EnergiesToProjectsIncludeSchema.optional(),
  where: EnergiesToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToProjectsOrderByWithRelationInputSchema.array(),EnergiesToProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EnergiesToProjectsScalarFieldEnumSchema,EnergiesToProjectsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default EnergiesToProjectsFindFirstArgsSchema;
