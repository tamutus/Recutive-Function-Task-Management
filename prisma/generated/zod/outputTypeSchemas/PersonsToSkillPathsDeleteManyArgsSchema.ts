import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillPathsWhereInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsWhereInputSchema'

export const PersonsToSkillPathsDeleteManyArgsSchema: z.ZodType<Prisma.PersonsToSkillPathsDeleteManyArgs> = z.object({
  where: PersonsToSkillPathsWhereInputSchema.optional(),
}).strict()

export default PersonsToSkillPathsDeleteManyArgsSchema;
