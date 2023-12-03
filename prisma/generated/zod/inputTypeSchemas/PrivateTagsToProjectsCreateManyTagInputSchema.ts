import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectsCreateManyTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateManyTagInput> = z.object({
  projectId: z.number().int()
}).strict();

export default PrivateTagsToProjectsCreateManyTagInputSchema;
