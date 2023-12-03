import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesTaskIdTagIdCompoundUniqueInput> = z.object({
  taskId: z.number(),
  tagId: z.number()
}).strict();

export default PrivateTagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema;
