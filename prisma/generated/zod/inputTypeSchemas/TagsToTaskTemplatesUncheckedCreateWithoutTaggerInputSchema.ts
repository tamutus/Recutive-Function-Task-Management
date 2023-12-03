import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUncheckedCreateWithoutTaggerInput> = z.object({
  taskId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema;
