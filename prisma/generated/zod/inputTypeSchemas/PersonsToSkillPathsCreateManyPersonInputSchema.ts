import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillPathsCreateManyPersonInputSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateManyPersonInput> = z.object({
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PersonsToSkillPathsCreateManyPersonInputSchema;
