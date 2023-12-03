import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInput> = z.object({
  privateTagId: z.number().int()
}).strict();

export default PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema;
