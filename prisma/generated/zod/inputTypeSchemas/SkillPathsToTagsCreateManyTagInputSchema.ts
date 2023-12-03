import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillPathsToTagsCreateManyTagInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateManyTagInput> = z.object({
  skillId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default SkillPathsToTagsCreateManyTagInputSchema;
