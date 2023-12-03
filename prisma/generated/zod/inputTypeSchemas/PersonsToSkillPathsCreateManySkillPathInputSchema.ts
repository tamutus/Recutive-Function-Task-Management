import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToSkillPathsCreateManySkillPathInputSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateManySkillPathInput> = z.object({
  personId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PersonsToSkillPathsCreateManySkillPathInputSchema;
