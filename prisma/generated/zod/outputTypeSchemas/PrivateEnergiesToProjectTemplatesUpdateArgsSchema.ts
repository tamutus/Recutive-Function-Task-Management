import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesIncludeSchema'
import { PrivateEnergiesToProjectTemplatesUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesUpdateInputSchema'
import { PrivateEnergiesToProjectTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesUncheckedUpdateInputSchema'
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema'
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateEnergiesToProjectTemplatesSelectSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesSelect> = z.object({
  projectId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
}).strict()

export const PrivateEnergiesToProjectTemplatesUpdateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpdateArgs> = z.object({
  select: PrivateEnergiesToProjectTemplatesSelectSchema.optional(),
  include: PrivateEnergiesToProjectTemplatesIncludeSchema.optional(),
  data: z.union([ PrivateEnergiesToProjectTemplatesUpdateInputSchema,PrivateEnergiesToProjectTemplatesUncheckedUpdateInputSchema ]),
  where: PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema,
}).strict()

export default PrivateEnergiesToProjectTemplatesUpdateArgsSchema;
