import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PersonsToProjectsUpdateManyMutationInputSchema'
import { PersonsToProjectsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PersonsToProjectsUncheckedUpdateManyInputSchema'
import { PersonsToProjectsWhereInputSchema } from '../inputTypeSchemas/PersonsToProjectsWhereInputSchema'

export const PersonsToProjectsUpdateManyArgsSchema: z.ZodType<Prisma.PersonsToProjectsUpdateManyArgs> = z.object({
  data: z.union([ PersonsToProjectsUpdateManyMutationInputSchema,PersonsToProjectsUncheckedUpdateManyInputSchema ]),
  where: PersonsToProjectsWhereInputSchema.optional(),
}).strict()

export default PersonsToProjectsUpdateManyArgsSchema;
