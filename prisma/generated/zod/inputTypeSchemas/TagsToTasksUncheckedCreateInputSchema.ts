import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTasksUncheckedCreateInputSchema: z.ZodType<Prisma.TagsToTasksUncheckedCreateInput> = z.object({
  tagId: z.number().int(),
  taskId: z.number().int()
}).strict();

export default TagsToTasksUncheckedCreateInputSchema;
