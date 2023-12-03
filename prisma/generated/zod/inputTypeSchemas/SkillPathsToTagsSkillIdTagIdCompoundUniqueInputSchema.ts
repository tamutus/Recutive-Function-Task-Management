import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillPathsToTagsSkillIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.SkillPathsToTagsSkillIdTagIdCompoundUniqueInput> = z.object({
  skillId: z.number(),
  tagId: z.number()
}).strict();

export default SkillPathsToTagsSkillIdTagIdCompoundUniqueInputSchema;
