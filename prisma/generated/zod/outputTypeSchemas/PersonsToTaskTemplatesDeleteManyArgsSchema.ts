import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesWhereInputSchema'

export const PersonsToTaskTemplatesDeleteManyArgsSchema: z.ZodType<Prisma.PersonsToTaskTemplatesDeleteManyArgs> = z.object({
  where: PersonsToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default PersonsToTaskTemplatesDeleteManyArgsSchema;
