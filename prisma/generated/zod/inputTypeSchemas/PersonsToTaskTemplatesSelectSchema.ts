import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"

export const PersonsToTaskTemplatesSelectSchema: z.ZodType<Prisma.PersonsToTaskTemplatesSelect> = z.object({
  personId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
}).strict()

export default PersonsToTaskTemplatesSelectSchema;
