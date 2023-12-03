import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTaskTemplatesCreateManyTaskInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateManyTaskInput> = z.object({
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default TagsToTaskTemplatesCreateManyTaskInputSchema;
