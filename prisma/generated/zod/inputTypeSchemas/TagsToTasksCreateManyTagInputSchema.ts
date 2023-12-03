import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTasksCreateManyTagInputSchema: z.ZodType<Prisma.TagsToTasksCreateManyTagInput> = z.object({
  taskId: z.number().int()
}).strict();

export default TagsToTasksCreateManyTagInputSchema;
