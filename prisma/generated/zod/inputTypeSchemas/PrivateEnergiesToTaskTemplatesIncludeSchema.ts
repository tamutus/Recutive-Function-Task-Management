import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"

export const PrivateEnergiesToTaskTemplatesIncludeSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesInclude> = z.object({
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
}).strict()

export default PrivateEnergiesToTaskTemplatesIncludeSchema;
