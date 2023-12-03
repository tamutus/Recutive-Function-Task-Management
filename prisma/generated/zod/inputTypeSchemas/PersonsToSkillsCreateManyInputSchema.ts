import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillsCreateManyInputSchema: z.ZodType<Prisma.PersonsToSkillsCreateManyInput> = z.object({
  personId: z.number().int(),
  skillId: z.number().int()
}).strict();

export default PersonsToSkillsCreateManyInputSchema;
