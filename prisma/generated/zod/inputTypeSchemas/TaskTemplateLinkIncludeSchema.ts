import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"

export const TaskTemplateLinkIncludeSchema: z.ZodType<Prisma.TaskTemplateLinkInclude> = z.object({
  precursor: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  successor: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
}).strict()

export default TaskTemplateLinkIncludeSchema;
