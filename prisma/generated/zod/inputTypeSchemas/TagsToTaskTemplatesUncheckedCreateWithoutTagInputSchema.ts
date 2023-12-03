import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUncheckedCreateWithoutTagInput> = z.object({
  taskId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema;
