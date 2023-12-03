import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTasksUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.TagsToTasksUncheckedCreateWithoutTagInput> = z.object({
  taskId: z.number().int()
}).strict();

export default TagsToTasksUncheckedCreateWithoutTagInputSchema;
