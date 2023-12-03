import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateLinkCreateManyInputSchema } from '../inputTypeSchemas/TaskTemplateLinkCreateManyInputSchema'

export const TaskTemplateLinkCreateManyArgsSchema: z.ZodType<Prisma.TaskTemplateLinkCreateManyArgs> = z.object({
  data: z.union([ TaskTemplateLinkCreateManyInputSchema,TaskTemplateLinkCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default TaskTemplateLinkCreateManyArgsSchema;
