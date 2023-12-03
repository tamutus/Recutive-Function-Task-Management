import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTaskTemplatesCreateManyTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateManyTaskInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PrivateTagsToTaskTemplatesCreateManyTaskInputSchema;
