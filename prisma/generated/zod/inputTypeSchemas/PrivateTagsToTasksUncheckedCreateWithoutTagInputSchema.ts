import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUncheckedCreateWithoutTagInput> = z.object({
  taskId: z.number().int()
}).strict();

export default PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema;
