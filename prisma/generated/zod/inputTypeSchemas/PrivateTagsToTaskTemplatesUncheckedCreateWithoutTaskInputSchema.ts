import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema;
