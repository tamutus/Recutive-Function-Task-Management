import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectTemplatesUncheckedCreateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUncheckedCreateInput> = z.object({
  projectId: z.number().int(),
  privateTagId: z.number().int()
}).strict();

export default PrivateTagsToProjectTemplatesUncheckedCreateInputSchema;
