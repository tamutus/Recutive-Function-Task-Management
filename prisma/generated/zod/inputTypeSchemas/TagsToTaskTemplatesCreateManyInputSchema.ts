import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTaskTemplatesCreateManyInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateManyInput> = z.object({
  taskId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default TagsToTaskTemplatesCreateManyInputSchema;
