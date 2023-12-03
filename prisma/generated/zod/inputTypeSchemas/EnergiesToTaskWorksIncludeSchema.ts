import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { TaskWorkArgsSchema } from "../outputTypeSchemas/TaskWorkArgsSchema"

export const EnergiesToTaskWorksIncludeSchema: z.ZodType<Prisma.EnergiesToTaskWorksInclude> = z.object({
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  work: z.union([z.boolean(),z.lazy(() => TaskWorkArgsSchema)]).optional(),
}).strict()

export default EnergiesToTaskWorksIncludeSchema;
