import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillPathsCreateManyInputSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateManyInput> = z.object({
  personId: z.number().int(),
  skillId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PersonsToSkillPathsCreateManyInputSchema;
