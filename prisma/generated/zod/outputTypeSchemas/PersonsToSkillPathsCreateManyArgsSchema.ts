import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillPathsCreateManyInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsCreateManyInputSchema'

export const PersonsToSkillPathsCreateManyArgsSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateManyArgs> = z.object({
  data: z.union([ PersonsToSkillPathsCreateManyInputSchema,PersonsToSkillPathsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PersonsToSkillPathsCreateManyArgsSchema;
