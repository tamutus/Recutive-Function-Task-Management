import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInput> = z.object({
  projectId: z.number().int()
}).strict();

export default PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema;
