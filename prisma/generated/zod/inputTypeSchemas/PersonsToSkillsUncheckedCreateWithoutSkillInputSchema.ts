import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillsUncheckedCreateWithoutSkillInputSchema: z.ZodType<Prisma.PersonsToSkillsUncheckedCreateWithoutSkillInput> = z.object({
  personId: z.number().int()
}).strict();

export default PersonsToSkillsUncheckedCreateWithoutSkillInputSchema;
