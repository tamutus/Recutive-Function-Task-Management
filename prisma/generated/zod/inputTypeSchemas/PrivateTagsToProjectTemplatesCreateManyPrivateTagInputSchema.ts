import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectTemplatesCreateManyPrivateTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateManyPrivateTagInput> = z.object({
  projectId: z.number().int()
}).strict();

export default PrivateTagsToProjectTemplatesCreateManyPrivateTagInputSchema;
