import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectsCreateManyInputSchema } from '../inputTypeSchemas/PersonsToProjectsCreateManyInputSchema'

export const PersonsToProjectsCreateManyArgsSchema: z.ZodType<Prisma.PersonsToProjectsCreateManyArgs> = z.object({
  data: z.union([ PersonsToProjectsCreateManyInputSchema,PersonsToProjectsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PersonsToProjectsCreateManyArgsSchema;
