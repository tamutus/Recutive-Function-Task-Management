import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTasksCreateManyInputSchema: z.ZodType<Prisma.TagsToTasksCreateManyInput> = z.object({
  tagId: z.number().int(),
  taskId: z.number().int()
}).strict();

export default TagsToTasksCreateManyInputSchema;
