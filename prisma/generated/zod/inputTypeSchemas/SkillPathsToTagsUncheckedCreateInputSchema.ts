import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillPathsToTagsUncheckedCreateInputSchema: z.ZodType<Prisma.SkillPathsToTagsUncheckedCreateInput> = z.object({
  skillId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default SkillPathsToTagsUncheckedCreateInputSchema;
