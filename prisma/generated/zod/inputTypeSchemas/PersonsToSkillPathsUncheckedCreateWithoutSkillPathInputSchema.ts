import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUncheckedCreateWithoutSkillPathInput> = z.object({
  personId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PersonsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema;
