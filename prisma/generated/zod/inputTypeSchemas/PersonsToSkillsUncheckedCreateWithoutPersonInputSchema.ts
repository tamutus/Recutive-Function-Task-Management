import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillsUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillsUncheckedCreateWithoutPersonInput> = z.object({
  skillId: z.number().int()
}).strict();

export default PersonsToSkillsUncheckedCreateWithoutPersonInputSchema;
