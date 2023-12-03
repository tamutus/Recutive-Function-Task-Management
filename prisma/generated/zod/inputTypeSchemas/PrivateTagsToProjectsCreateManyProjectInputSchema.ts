import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectsCreateManyProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateManyProjectInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PrivateTagsToProjectsCreateManyProjectInputSchema;
