import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillPathsToTagsUncheckedCreateWithoutSkillInput> = z.object({
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default SkillPathsToTagsUncheckedCreateWithoutSkillInputSchema;
