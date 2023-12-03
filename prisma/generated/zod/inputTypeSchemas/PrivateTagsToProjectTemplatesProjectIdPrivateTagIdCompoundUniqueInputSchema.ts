import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToProjectTemplatesProjectIdPrivateTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesProjectIdPrivateTagIdCompoundUniqueInput> = z.object({
  projectId: z.number(),
  privateTagId: z.number()
}).strict();

export default PrivateTagsToProjectTemplatesProjectIdPrivateTagIdCompoundUniqueInputSchema;
