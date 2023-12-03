import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectsUncheckedCreateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUncheckedCreateInput> = z.object({
  tagId: z.number().int(),
  projectId: z.number().int()
}).strict();

export default PrivateTagsToProjectsUncheckedCreateInputSchema;
