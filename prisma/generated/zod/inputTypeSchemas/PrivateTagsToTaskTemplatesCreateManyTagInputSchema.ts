import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTaskTemplatesCreateManyTagInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateManyTagInput> = z.object({
  taskId: z.number().int()
}).strict();

export default PrivateTagsToTaskTemplatesCreateManyTagInputSchema;
