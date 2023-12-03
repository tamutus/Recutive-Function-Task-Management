import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTagsCreateManyTaggerInputSchema: z.ZodType<Prisma.SkillsToTagsCreateManyTaggerInput> = z.object({
  skillId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default SkillsToTagsCreateManyTaggerInputSchema;
