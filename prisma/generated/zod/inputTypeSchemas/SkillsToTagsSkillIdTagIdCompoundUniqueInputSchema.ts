import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTagsSkillIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.SkillsToTagsSkillIdTagIdCompoundUniqueInput> = z.object({
  skillId: z.number(),
  tagId: z.number()
}).strict();

export default SkillsToTagsSkillIdTagIdCompoundUniqueInputSchema;
