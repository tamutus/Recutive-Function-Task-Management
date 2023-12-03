import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToSkillPathsCreateManyInputSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateManyInput> = z.object({
  skillId: z.number().int(),
  skillPathId: z.number().int()
}).strict();

export default SkillsToSkillPathsCreateManyInputSchema;
