import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillsToSkillPathsCreateManySkillPathInputSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateManySkillPathInput> = z.object({
  skillId: z.number().int()
}).strict();

export default SkillsToSkillPathsCreateManySkillPathInputSchema;
