import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillPathsToTagsCreateManySkillInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateManySkillInput> = z.object({
  tagId: z.number().int(),
  taggerId: z.number().int()
}).strict();

export default SkillPathsToTagsCreateManySkillInputSchema;
