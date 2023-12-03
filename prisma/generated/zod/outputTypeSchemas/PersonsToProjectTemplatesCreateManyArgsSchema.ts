import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectTemplatesCreateManyInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesCreateManyInputSchema'

export const PersonsToProjectTemplatesCreateManyArgsSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateManyArgs> = z.object({
  data: z.union([ PersonsToProjectTemplatesCreateManyInputSchema,PersonsToProjectTemplatesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PersonsToProjectTemplatesCreateManyArgsSchema;
