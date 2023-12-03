import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUncheckedCreateWithoutTagInput> = z.object({
  projectId: z.number().int()
}).strict();

export default PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema;
