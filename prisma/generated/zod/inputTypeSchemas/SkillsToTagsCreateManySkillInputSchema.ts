import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToTagsCreateManySkillInputSchema: z.ZodType<Prisma.SkillsToTagsCreateManySkillInput> = z.object({
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default SkillsToTagsCreateManySkillInputSchema;
