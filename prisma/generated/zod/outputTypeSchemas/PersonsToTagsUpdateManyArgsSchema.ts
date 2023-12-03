import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PersonsToTagsUpdateManyMutationInputSchema'
import { PersonsToTagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PersonsToTagsUncheckedUpdateManyInputSchema'
import { PersonsToTagsWhereInputSchema } from '../inputTypeSchemas/PersonsToTagsWhereInputSchema'

export const PersonsToTagsUpdateManyArgsSchema: z.ZodType<Prisma.PersonsToTagsUpdateManyArgs> = z.object({
  data: z.union([ PersonsToTagsUpdateManyMutationInputSchema,PersonsToTagsUncheckedUpdateManyInputSchema ]),
  where: PersonsToTagsWhereInputSchema.optional(),
}).strict()

export default PersonsToTagsUpdateManyArgsSchema;
