import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTaskTemplatesCreateManyTagInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateManyTagInput> = z.object({
  taskId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default TagsToTaskTemplatesCreateManyTagInputSchema;
