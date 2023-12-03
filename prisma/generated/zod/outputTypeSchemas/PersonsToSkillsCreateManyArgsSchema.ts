import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillsCreateManyInputSchema } from '../inputTypeSchemas/PersonsToSkillsCreateManyInputSchema'

export const PersonsToSkillsCreateManyArgsSchema: z.ZodType<Prisma.PersonsToSkillsCreateManyArgs> = z.object({
  data: z.union([ PersonsToSkillsCreateManyInputSchema,PersonsToSkillsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PersonsToSkillsCreateManyArgsSchema;
