import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTaskTemplatesUncheckedCreateInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUncheckedCreateInput> = z.object({
  taskId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default PrivateTagsToTaskTemplatesUncheckedCreateInputSchema;
