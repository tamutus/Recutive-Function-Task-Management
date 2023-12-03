import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUncheckedCreateWithoutPersonInput> = z.object({
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema;
