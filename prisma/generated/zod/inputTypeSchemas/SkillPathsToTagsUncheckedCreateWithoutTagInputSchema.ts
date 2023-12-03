import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillPathsToTagsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.SkillPathsToTagsUncheckedCreateWithoutTagInput> = z.object({
  skillId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default SkillPathsToTagsUncheckedCreateWithoutTagInputSchema;
