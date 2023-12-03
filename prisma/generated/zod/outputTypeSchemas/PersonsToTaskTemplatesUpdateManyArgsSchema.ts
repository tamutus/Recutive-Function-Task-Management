import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTaskTemplatesUpdateManyMutationInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesUpdateManyMutationInputSchema'
import { PersonsToTaskTemplatesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesUncheckedUpdateManyInputSchema'
import { PersonsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesWhereInputSchema'

export const PersonsToTaskTemplatesUpdateManyArgsSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpdateManyArgs> = z.object({
  data: z.union([ PersonsToTaskTemplatesUpdateManyMutationInputSchema,PersonsToTaskTemplatesUncheckedUpdateManyInputSchema ]),
  where: PersonsToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default PersonsToTaskTemplatesUpdateManyArgsSchema;
