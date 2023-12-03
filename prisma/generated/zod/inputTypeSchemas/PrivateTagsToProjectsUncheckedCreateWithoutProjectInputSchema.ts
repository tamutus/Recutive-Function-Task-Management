import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUncheckedCreateWithoutProjectInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema;
