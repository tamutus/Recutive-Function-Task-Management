import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"

export const PrivateTagsToTaskTemplatesIncludeSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesInclude> = z.object({
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
}).strict()

export default PrivateTagsToTaskTemplatesIncludeSchema;
