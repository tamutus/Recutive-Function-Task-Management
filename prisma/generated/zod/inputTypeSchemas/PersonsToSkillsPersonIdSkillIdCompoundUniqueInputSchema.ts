import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillsPersonIdSkillIdCompoundUniqueInputSchema: z.ZodType<Prisma.PersonsToSkillsPersonIdSkillIdCompoundUniqueInput> = z.object({
  personId: z.number(),
  skillId: z.number()
}).strict();

export default PersonsToSkillsPersonIdSkillIdCompoundUniqueInputSchema;
