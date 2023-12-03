import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskLinkCreateManyInputSchema } from '../inputTypeSchemas/TaskLinkCreateManyInputSchema'

export const TaskLinkCreateManyArgsSchema: z.ZodType<Prisma.TaskLinkCreateManyArgs> = z.object({
  data: z.union([ TaskLinkCreateManyInputSchema,TaskLinkCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default TaskLinkCreateManyArgsSchema;
