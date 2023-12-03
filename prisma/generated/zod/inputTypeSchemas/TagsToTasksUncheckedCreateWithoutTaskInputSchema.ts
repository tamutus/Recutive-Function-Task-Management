import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTasksUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTasksUncheckedCreateWithoutTaskInput> = z.object({
  tagId: z.number().int()
}).strict();

export default TagsToTasksUncheckedCreateWithoutTaskInputSchema;
