import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"

export const EnergiesToTasksIncludeSchema: z.ZodType<Prisma.EnergiesToTasksInclude> = z.object({
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export default EnergiesToTasksIncludeSchema;
