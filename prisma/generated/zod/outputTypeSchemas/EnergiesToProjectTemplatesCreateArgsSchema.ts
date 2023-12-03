import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesIncludeSchema'
import { EnergiesToProjectTemplatesCreateInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesCreateInputSchema'
import { EnergiesToProjectTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesUncheckedCreateInputSchema'
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergiesToProjectTemplatesSelectSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesSelect> = z.object({
  projectId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  links: z.boolean().optional(),
  info: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
}).strict()

export const EnergiesToProjectTemplatesCreateArgsSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCreateArgs> = z.object({
  select: EnergiesToProjectTemplatesSelectSchema.optional(),
  include: EnergiesToProjectTemplatesIncludeSchema.optional(),
  data: z.union([ EnergiesToProjectTemplatesCreateInputSchema,EnergiesToProjectTemplatesUncheckedCreateInputSchema ]),
}).strict()

export default EnergiesToProjectTemplatesCreateArgsSchema;
