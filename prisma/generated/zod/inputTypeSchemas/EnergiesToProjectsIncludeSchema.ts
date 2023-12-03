import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"

export const EnergiesToProjectsIncludeSchema: z.ZodType<Prisma.EnergiesToProjectsInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
}).strict()

export default EnergiesToProjectsIncludeSchema;
