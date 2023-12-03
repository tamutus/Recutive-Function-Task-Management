import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagsToTasksTagIdTaskIdCompoundUniqueInputSchema: z.ZodType<Prisma.TagsToTasksTagIdTaskIdCompoundUniqueInput> = z.object({
  tagId: z.number(),
  taskId: z.number()
}).strict();

export default TagsToTasksTagIdTaskIdCompoundUniqueInputSchema;
