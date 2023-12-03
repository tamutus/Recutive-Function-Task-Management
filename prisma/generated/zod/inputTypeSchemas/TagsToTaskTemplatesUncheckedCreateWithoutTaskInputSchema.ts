import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUncheckedCreateWithoutTaskInput> = z.object({
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema;
