import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"

export const EnergiesToTaskTemplatesSelectSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesSelect> = z.object({
  taskId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  info: z.boolean().optional(),
  links: z.boolean().optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
}).strict()

export default EnergiesToTaskTemplatesSelectSchema;
