import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTagsWhereInputSchema } from '../inputTypeSchemas/PersonsToTagsWhereInputSchema'

export const PersonsToTagsDeleteManyArgsSchema: z.ZodType<Prisma.PersonsToTagsDeleteManyArgs> = z.object({
  where: PersonsToTagsWhereInputSchema.optional(),
}).strict()

export default PersonsToTagsDeleteManyArgsSchema;
