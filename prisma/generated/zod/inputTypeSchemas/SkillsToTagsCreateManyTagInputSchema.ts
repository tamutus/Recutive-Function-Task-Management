import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTagsCreateManyTagInputSchema: z.ZodType<Prisma.SkillsToTagsCreateManyTagInput> = z.object({
  skillId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default SkillsToTagsCreateManyTagInputSchema;
