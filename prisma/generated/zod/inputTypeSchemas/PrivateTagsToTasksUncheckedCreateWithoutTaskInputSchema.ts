import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUncheckedCreateWithoutTaskInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema;
