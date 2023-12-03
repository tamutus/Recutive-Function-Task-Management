import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTagsUncheckedCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTagsUncheckedCreateWithoutSkillInput> = z.object({
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default SkillsToTagsUncheckedCreateWithoutSkillInputSchema;
