import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTagsCreateManyInputSchema } from '../inputTypeSchemas/PersonsToTagsCreateManyInputSchema'

export const PersonsToTagsCreateManyArgsSchema: z.ZodType<Prisma.PersonsToTagsCreateManyArgs> = z.object({
  data: z.union([ PersonsToTagsCreateManyInputSchema,PersonsToTagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PersonsToTagsCreateManyArgsSchema;
