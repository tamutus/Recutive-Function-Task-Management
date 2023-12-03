import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectTemplatesUpdateManyMutationInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesUpdateManyMutationInputSchema'
import { PersonsToProjectTemplatesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesUncheckedUpdateManyInputSchema'
import { PersonsToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesWhereInputSchema'

export const PersonsToProjectTemplatesUpdateManyArgsSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpdateManyArgs> = z.object({
  data: z.union([ PersonsToProjectTemplatesUpdateManyMutationInputSchema,PersonsToProjectTemplatesUncheckedUpdateManyInputSchema ]),
  where: PersonsToProjectTemplatesWhereInputSchema.optional(),
}).strict()

export default PersonsToProjectTemplatesUpdateManyArgsSchema;
