import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTagsUncheckedCreateInputSchema: z.ZodType<Prisma.SkillsToTagsUncheckedCreateInput> = z.object({
  skillId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default SkillsToTagsUncheckedCreateInputSchema;
