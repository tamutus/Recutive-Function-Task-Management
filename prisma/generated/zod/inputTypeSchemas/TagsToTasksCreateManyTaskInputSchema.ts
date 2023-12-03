import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTasksCreateManyTaskInputSchema: z.ZodType<Prisma.TagsToTasksCreateManyTaskInput> = z.object({
  tagId: z.number().int()
}).strict();

export default TagsToTasksCreateManyTaskInputSchema;
