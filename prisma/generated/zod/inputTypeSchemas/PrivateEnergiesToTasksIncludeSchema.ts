import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"

export const PrivateEnergiesToTasksIncludeSchema: z.ZodType<Prisma.PrivateEnergiesToTasksInclude> = z.object({
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export default PrivateEnergiesToTasksIncludeSchema;
