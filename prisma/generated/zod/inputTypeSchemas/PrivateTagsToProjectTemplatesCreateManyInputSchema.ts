import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectTemplatesCreateManyInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateManyInput> = z.object({
  projectId: z.number().int(),
  privateTagId: z.number().int()
}).strict();

export default PrivateTagsToProjectTemplatesCreateManyInputSchema;
