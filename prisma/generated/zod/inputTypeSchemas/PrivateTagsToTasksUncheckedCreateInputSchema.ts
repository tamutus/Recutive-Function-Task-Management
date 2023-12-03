import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTasksUncheckedCreateInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUncheckedCreateInput> = z.object({
  tagId: z.number().int(),
  taskId: z.number().int()
}).strict();

export default PrivateTagsToTasksUncheckedCreateInputSchema;
