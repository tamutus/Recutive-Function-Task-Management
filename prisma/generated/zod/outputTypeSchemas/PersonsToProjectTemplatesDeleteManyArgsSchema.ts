import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesWhereInputSchema'

export const PersonsToProjectTemplatesDeleteManyArgsSchema: z.ZodType<Prisma.PersonsToProjectTemplatesDeleteManyArgs> = z.object({
  where: PersonsToProjectTemplatesWhereInputSchema.optional(),
}).strict()

export default PersonsToProjectTemplatesDeleteManyArgsSchema;
