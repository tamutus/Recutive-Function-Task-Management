import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWorkUpdateManyMutationInputSchema } from '../inputTypeSchemas/TaskWorkUpdateManyMutationInputSchema'
import { TaskWorkUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TaskWorkUncheckedUpdateManyInputSchema'
import { TaskWorkWhereInputSchema } from '../inputTypeSchemas/TaskWorkWhereInputSchema'

export const TaskWorkUpdateManyArgsSchema: z.ZodType<Prisma.TaskWorkUpdateManyArgs> = z.object({
  data: z.union([ TaskWorkUpdateManyMutationInputSchema,TaskWorkUncheckedUpdateManyInputSchema ]),
  where: TaskWorkWhereInputSchema.optional(),
}).strict()

export default TaskWorkUpdateManyArgsSchema;
