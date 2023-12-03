import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema: z.ZodType<Prisma.SkillPathsToTagsUncheckedCreateWithoutTaggerInput> = z.object({
  skillId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default SkillPathsToTagsUncheckedCreateWithoutTaggerInputSchema;
