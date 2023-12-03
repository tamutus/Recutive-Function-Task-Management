import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectTemplatesCreateManyProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateManyProjectInput> = z.object({
  privateTagId: z.number().int()
}).strict();

export default PrivateTagsToProjectTemplatesCreateManyProjectInputSchema;
