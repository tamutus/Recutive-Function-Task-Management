import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToSkillPathsUncheckedCreateInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUncheckedCreateInput> = z.object({
  skillId: z.number().int(),
  skillPathId: z.number().int()
}).strict();

export default SkillsToSkillPathsUncheckedCreateInputSchema;
