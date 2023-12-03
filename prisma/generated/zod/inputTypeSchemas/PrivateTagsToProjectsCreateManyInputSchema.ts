import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectsCreateManyInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateManyInput> = z.object({
  tagId: z.number().int(),
  projectId: z.number().int()
}).strict();

export default PrivateTagsToProjectsCreateManyInputSchema;
