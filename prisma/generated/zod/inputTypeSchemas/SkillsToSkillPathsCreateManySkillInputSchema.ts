import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToSkillPathsCreateManySkillInputSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateManySkillInput> = z.object({
  skillPathId: z.number().int()
}).strict();

export default SkillsToSkillPathsCreateManySkillInputSchema;
