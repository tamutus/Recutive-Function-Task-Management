import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUncheckedCreateWithoutSkillInput> = z.object({
  skillPathId: z.number().int()
}).strict();

export default SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema;
