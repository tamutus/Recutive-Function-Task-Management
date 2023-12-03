import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateWhereInputSchema } from '../inputTypeSchemas/TaskTemplateWhereInputSchema'

export const TaskTemplateDeleteManyArgsSchema: z.ZodType<Prisma.TaskTemplateDeleteManyArgs> = z.object({
  where: TaskTemplateWhereInputSchema.optional(),
}).strict()

export default TaskTemplateDeleteManyArgsSchema;
