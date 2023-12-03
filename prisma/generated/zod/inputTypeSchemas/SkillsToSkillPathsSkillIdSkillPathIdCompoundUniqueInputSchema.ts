import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToSkillPathsSkillIdSkillPathIdCompoundUniqueInputSchema: z.ZodType<Prisma.SkillsToSkillPathsSkillIdSkillPathIdCompoundUniqueInput> = z.object({
  skillId: z.number(),
  skillPathId: z.number()
}).strict();

export default SkillsToSkillPathsSkillIdSkillPathIdCompoundUniqueInputSchema;
