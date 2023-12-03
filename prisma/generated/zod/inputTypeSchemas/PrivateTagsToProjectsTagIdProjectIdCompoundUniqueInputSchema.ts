import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectsTagIdProjectIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsTagIdProjectIdCompoundUniqueInput> = z.object({
  tagId: z.number(),
  projectId: z.number()
}).strict();

export default PrivateTagsToProjectsTagIdProjectIdCompoundUniqueInputSchema;
