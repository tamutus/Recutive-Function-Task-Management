import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTaskTemplatesCreateManyInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesCreateManyInputSchema'

export const PersonsToTaskTemplatesCreateManyArgsSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateManyArgs> = z.object({
  data: z.union([ PersonsToTaskTemplatesCreateManyInputSchema,PersonsToTaskTemplatesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PersonsToTaskTemplatesCreateManyArgsSchema;
