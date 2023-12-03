import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTasksTagIdTaskIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateTagsToTasksTagIdTaskIdCompoundUniqueInput> = z.object({
  tagId: z.number(),
  taskId: z.number()
}).strict();

export default PrivateTagsToTasksTagIdTaskIdCompoundUniqueInputSchema;
