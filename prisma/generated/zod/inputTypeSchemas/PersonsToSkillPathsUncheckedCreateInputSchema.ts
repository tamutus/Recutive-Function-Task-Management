import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillPathsUncheckedCreateInputSchema: z.ZodType<Prisma.PersonsToSkillPathsUncheckedCreateInput> = z.object({
  personId: z.number().int(),
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PersonsToSkillPathsUncheckedCreateInputSchema;
