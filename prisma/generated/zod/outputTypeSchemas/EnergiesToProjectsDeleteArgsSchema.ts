import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectsIncludeSchema } from '../inputTypeSchemas/EnergiesToProjectsIncludeSchema'
import { EnergiesToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToProjectsWhereUniqueInputSchema'
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

export const EnergiesToProjectsDeleteArgsSchema: z.ZodType<Prisma.EnergiesToProjectsDeleteArgs> = z.object({
  select: EnergiesToProjectsSelectSchema.optional(),
  include: EnergiesToProjectsIncludeSchema.optional(),
  where: EnergiesToProjectsWhereUniqueInputSchema,
}).strict()

export default EnergiesToProjectsDeleteArgsSchema;
