import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTaskTemplatesCreateManyTaggerInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateManyTaggerInput> = z.object({
  taskId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default TagsToTaskTemplatesCreateManyTaggerInputSchema;
