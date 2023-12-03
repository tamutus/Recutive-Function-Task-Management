import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateCreateManyInputSchema } from '../inputTypeSchemas/TaskTemplateCreateManyInputSchema'

export const TaskTemplateCreateManyArgsSchema: z.ZodType<Prisma.TaskTemplateCreateManyArgs> = z.object({
  data: z.union([ TaskTemplateCreateManyInputSchema,TaskTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default TaskTemplateCreateManyArgsSchema;
