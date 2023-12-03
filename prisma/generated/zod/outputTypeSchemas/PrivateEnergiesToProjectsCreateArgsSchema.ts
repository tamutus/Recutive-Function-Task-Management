import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsIncludeSchema'
import { PrivateEnergiesToProjectsCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsCreateInputSchema'
import { PrivateEnergiesToProjectsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsUncheckedCreateInputSchema'
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

export const PrivateEnergiesToProjectsCreateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateArgs> = z.object({
  select: PrivateEnergiesToProjectsSelectSchema.optional(),
  include: PrivateEnergiesToProjectsIncludeSchema.optional(),
  data: z.union([ PrivateEnergiesToProjectsCreateInputSchema,PrivateEnergiesToProjectsUncheckedCreateInputSchema ]),
}).strict()

export default PrivateEnergiesToProjectsCreateArgsSchema;
