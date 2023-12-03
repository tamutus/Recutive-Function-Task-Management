import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/TaskTemplateUpdateManyMutationInputSchema'
import { TaskTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TaskTemplateUncheckedUpdateManyInputSchema'
import { TaskTemplateWhereInputSchema } from '../inputTypeSchemas/TaskTemplateWhereInputSchema'

export const TaskTemplateUpdateManyArgsSchema: z.ZodType<Prisma.TaskTemplateUpdateManyArgs> = z.object({
  data: z.union([ TaskTemplateUpdateManyMutationInputSchema,TaskTemplateUncheckedUpdateManyInputSchema ]),
  where: TaskTemplateWhereInputSchema.optional(),
}).strict()

export default TaskTemplateUpdateManyArgsSchema;
