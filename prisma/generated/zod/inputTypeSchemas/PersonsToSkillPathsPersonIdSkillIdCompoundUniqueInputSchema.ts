import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillPathsPersonIdSkillIdCompoundUniqueInputSchema: z.ZodType<Prisma.PersonsToSkillPathsPersonIdSkillIdCompoundUniqueInput> = z.object({
  personId: z.number(),
  skillId: z.number()
}).strict();

export default PersonsToSkillPathsPersonIdSkillIdCompoundUniqueInputSchema;
