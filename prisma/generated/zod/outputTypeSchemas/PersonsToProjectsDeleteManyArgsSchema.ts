import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectsWhereInputSchema } from '../inputTypeSchemas/PersonsToProjectsWhereInputSchema'

export const PersonsToProjectsDeleteManyArgsSchema: z.ZodType<Prisma.PersonsToProjectsDeleteManyArgs> = z.object({
  where: PersonsToProjectsWhereInputSchema.optional(),
}).strict()

export default PersonsToProjectsDeleteManyArgsSchema;
