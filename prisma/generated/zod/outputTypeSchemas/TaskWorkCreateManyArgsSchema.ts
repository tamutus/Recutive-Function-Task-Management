import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWorkCreateManyInputSchema } from '../inputTypeSchemas/TaskWorkCreateManyInputSchema'

export const TaskWorkCreateManyArgsSchema: z.ZodType<Prisma.TaskWorkCreateManyArgs> = z.object({
  data: z.union([ TaskWorkCreateManyInputSchema,TaskWorkCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default TaskWorkCreateManyArgsSchema;
