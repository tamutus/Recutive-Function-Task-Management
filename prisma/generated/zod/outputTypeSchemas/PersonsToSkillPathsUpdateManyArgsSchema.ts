import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillPathsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsUpdateManyMutationInputSchema'
import { PersonsToSkillPathsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsUncheckedUpdateManyInputSchema'
import { PersonsToSkillPathsWhereInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsWhereInputSchema'

export const PersonsToSkillPathsUpdateManyArgsSchema: z.ZodType<Prisma.PersonsToSkillPathsUpdateManyArgs> = z.object({
  data: z.union([ PersonsToSkillPathsUpdateManyMutationInputSchema,PersonsToSkillPathsUncheckedUpdateManyInputSchema ]),
  where: PersonsToSkillPathsWhereInputSchema.optional(),
}).strict()

export default PersonsToSkillPathsUpdateManyArgsSchema;
