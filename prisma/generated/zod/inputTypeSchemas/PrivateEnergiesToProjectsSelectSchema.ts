import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"

export const PrivateEnergiesToProjectsSelectSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsSelect> = z.object({
  projectId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  notes: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
}).strict()

export default PrivateEnergiesToProjectsSelectSchema;
