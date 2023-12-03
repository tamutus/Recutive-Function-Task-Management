import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"

export const EnergiesToProjectTemplatesIncludeSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
}).strict()

export default EnergiesToProjectTemplatesIncludeSchema;
