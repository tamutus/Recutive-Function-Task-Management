import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillsCreateManyPersonInputSchema: z.ZodType<Prisma.PersonsToSkillsCreateManyPersonInput> = z.object({
  skillId: z.number().int()
}).strict();

export default PersonsToSkillsCreateManyPersonInputSchema;
