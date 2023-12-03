import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesTaskIdTagIdCompoundUniqueInput> = z.object({
  taskId: z.number(),
  tagId: z.number()
}).strict();

export default TagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema;
