import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskLinkUpdateManyMutationInputSchema } from '../inputTypeSchemas/TaskLinkUpdateManyMutationInputSchema'
import { TaskLinkUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TaskLinkUncheckedUpdateManyInputSchema'
import { TaskLinkWhereInputSchema } from '../inputTypeSchemas/TaskLinkWhereInputSchema'

export const TaskLinkUpdateManyArgsSchema: z.ZodType<Prisma.TaskLinkUpdateManyArgs> = z.object({
  data: z.union([ TaskLinkUpdateManyMutationInputSchema,TaskLinkUncheckedUpdateManyInputSchema ]),
  where: TaskLinkWhereInputSchema.optional(),
}).strict()

export default TaskLinkUpdateManyArgsSchema;
