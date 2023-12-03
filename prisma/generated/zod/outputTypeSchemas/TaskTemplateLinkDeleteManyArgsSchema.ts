import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateLinkWhereInputSchema } from '../inputTypeSchemas/TaskTemplateLinkWhereInputSchema'

export const TaskTemplateLinkDeleteManyArgsSchema: z.ZodType<Prisma.TaskTemplateLinkDeleteManyArgs> = z.object({
  where: TaskTemplateLinkWhereInputSchema.optional(),
}).strict()

export default TaskTemplateLinkDeleteManyArgsSchema;
