import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTagsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.SkillsToTagsUncheckedCreateWithoutTagInput> = z.object({
  skillId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default SkillsToTagsUncheckedCreateWithoutTagInputSchema;
