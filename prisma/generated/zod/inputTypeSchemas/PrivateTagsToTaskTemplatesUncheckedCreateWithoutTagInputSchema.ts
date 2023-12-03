import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInput> = z.object({
  taskId: z.number().int()
}).strict();

export default PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema;
