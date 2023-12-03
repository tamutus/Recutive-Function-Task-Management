import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTagsUncheckedCreateWithoutTaggerInputSchema: z.ZodType<Prisma.SkillsToTagsUncheckedCreateWithoutTaggerInput> = z.object({
  skillId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default SkillsToTagsUncheckedCreateWithoutTaggerInputSchema;
