import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTaskTemplatesUncheckedCreateInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUncheckedCreateInput> = z.object({
  taskId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default TagsToTaskTemplatesUncheckedCreateInputSchema;
