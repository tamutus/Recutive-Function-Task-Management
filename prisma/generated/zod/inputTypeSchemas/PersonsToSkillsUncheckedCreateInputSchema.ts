import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillsUncheckedCreateInputSchema: z.ZodType<Prisma.PersonsToSkillsUncheckedCreateInput> = z.object({
  personId: z.number().int(),
  skillId: z.number().int()
}).strict();

export default PersonsToSkillsUncheckedCreateInputSchema;
