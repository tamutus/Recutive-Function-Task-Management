import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectsIncludeSchema } from '../inputTypeSchemas/EnergiesToProjectsIncludeSchema'
import { EnergiesToProjectsCreateInputSchema } from '../inputTypeSchemas/EnergiesToProjectsCreateInputSchema'
import { EnergiesToProjectsUncheckedCreateInputSchema } from '../inputTypeSchemas/EnergiesToProjectsUncheckedCreateInputSchema'
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

export const EnergiesToProjectsCreateArgsSchema: z.ZodType<Prisma.EnergiesToProjectsCreateArgs> = z.object({
  select: EnergiesToProjectsSelectSchema.optional(),
  include: EnergiesToProjectsIncludeSchema.optional(),
  data: z.union([ EnergiesToProjectsCreateInputSchema,EnergiesToProjectsUncheckedCreateInputSchema ]),
}).strict()

export default EnergiesToProjectsCreateArgsSchema;
