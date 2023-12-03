import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectsIncludeSchema } from '../inputTypeSchemas/EnergiesToProjectsIncludeSchema'
import { EnergiesToProjectsUpdateInputSchema } from '../inputTypeSchemas/EnergiesToProjectsUpdateInputSchema'
import { EnergiesToProjectsUncheckedUpdateInputSchema } from '../inputTypeSchemas/EnergiesToProjectsUncheckedUpdateInputSchema'
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

export const EnergiesToProjectsUpdateArgsSchema: z.ZodType<Prisma.EnergiesToProjectsUpdateArgs> = z.object({
  select: EnergiesToProjectsSelectSchema.optional(),
  include: EnergiesToProjectsIncludeSchema.optional(),
  data: z.union([ EnergiesToProjectsUpdateInputSchema,EnergiesToProjectsUncheckedUpdateInputSchema ]),
  where: EnergiesToProjectsWhereUniqueInputSchema,
}).strict()

export default EnergiesToProjectsUpdateArgsSchema;
