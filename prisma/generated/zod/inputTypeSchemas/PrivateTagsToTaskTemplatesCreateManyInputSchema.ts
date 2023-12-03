import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTaskTemplatesCreateManyInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateManyInput> = z.object({
  taskId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default PrivateTagsToTaskTemplatesCreateManyInputSchema;
