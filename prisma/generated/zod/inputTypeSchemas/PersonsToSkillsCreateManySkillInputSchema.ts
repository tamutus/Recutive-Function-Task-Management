import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillsCreateManySkillInputSchema: z.ZodType<Prisma.PersonsToSkillsCreateManySkillInput> = z.object({
  personId: z.number().int()
}).strict();

export default PersonsToSkillsCreateManySkillInputSchema;
