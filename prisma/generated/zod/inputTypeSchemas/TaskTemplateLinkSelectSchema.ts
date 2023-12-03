import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"

export const TaskTemplateLinkSelectSchema: z.ZodType<Prisma.TaskTemplateLinkSelect> = z.object({
  precursorId: z.boolean().optional(),
  successorId: z.boolean().optional(),
  linkType: z.boolean().optional(),
  precursor: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  successor: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
}).strict()

export default TaskTemplateLinkSelectSchema;
