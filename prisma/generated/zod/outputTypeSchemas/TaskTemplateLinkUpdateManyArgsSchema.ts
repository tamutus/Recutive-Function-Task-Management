import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateLinkUpdateManyMutationInputSchema } from '../inputTypeSchemas/TaskTemplateLinkUpdateManyMutationInputSchema'
import { TaskTemplateLinkUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TaskTemplateLinkUncheckedUpdateManyInputSchema'
import { TaskTemplateLinkWhereInputSchema } from '../inputTypeSchemas/TaskTemplateLinkWhereInputSchema'

export const TaskTemplateLinkUpdateManyArgsSchema: z.ZodType<Prisma.TaskTemplateLinkUpdateManyArgs> = z.object({
  data: z.union([ TaskTemplateLinkUpdateManyMutationInputSchema,TaskTemplateLinkUncheckedUpdateManyInputSchema ]),
  where: TaskTemplateLinkWhereInputSchema.optional(),
}).strict()

export default TaskTemplateLinkUpdateManyArgsSchema;
