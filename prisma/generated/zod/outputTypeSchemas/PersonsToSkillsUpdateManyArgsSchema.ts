import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PersonsToSkillsUpdateManyMutationInputSchema'
import { PersonsToSkillsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PersonsToSkillsUncheckedUpdateManyInputSchema'
import { PersonsToSkillsWhereInputSchema } from '../inputTypeSchemas/PersonsToSkillsWhereInputSchema'

export const PersonsToSkillsUpdateManyArgsSchema: z.ZodType<Prisma.PersonsToSkillsUpdateManyArgs> = z.object({
  data: z.union([ PersonsToSkillsUpdateManyMutationInputSchema,PersonsToSkillsUncheckedUpdateManyInputSchema ]),
  where: PersonsToSkillsWhereInputSchema.optional(),
}).strict()

export default PersonsToSkillsUpdateManyArgsSchema;
