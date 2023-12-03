import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUncheckedCreateWithoutSkillPathInput> = z.object({
  skillId: z.number().int()
}).strict();

export default SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema;
