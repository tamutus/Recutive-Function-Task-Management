import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"

export const PersonsToTaskTemplatesIncludeSchema: z.ZodType<Prisma.PersonsToTaskTemplatesInclude> = z.object({
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
}).strict()

export default PersonsToTaskTemplatesIncludeSchema;
