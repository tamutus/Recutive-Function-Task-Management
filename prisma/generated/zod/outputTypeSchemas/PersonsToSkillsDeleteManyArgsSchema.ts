import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillsWhereInputSchema } from '../inputTypeSchemas/PersonsToSkillsWhereInputSchema'

export const PersonsToSkillsDeleteManyArgsSchema: z.ZodType<Prisma.PersonsToSkillsDeleteManyArgs> = z.object({
  where: PersonsToSkillsWhereInputSchema.optional(),
}).strict()

export default PersonsToSkillsDeleteManyArgsSchema;
