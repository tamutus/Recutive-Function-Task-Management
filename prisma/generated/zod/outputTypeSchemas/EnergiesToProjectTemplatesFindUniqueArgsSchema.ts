import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesIncludeSchema'
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesWhereUniqueInputSchema'
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

export const EnergiesToProjectTemplatesFindUniqueArgsSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesFindUniqueArgs> = z.object({
  select: EnergiesToProjectTemplatesSelectSchema.optional(),
  include: EnergiesToProjectTemplatesIncludeSchema.optional(),
  where: EnergiesToProjectTemplatesWhereUniqueInputSchema,
}).strict()

export default EnergiesToProjectTemplatesFindUniqueArgsSchema;
