import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillPathsSelectSchema } from '../inputTypeSchemas/PersonsToSkillPathsSelectSchema';
import { PersonsToSkillPathsIncludeSchema } from '../inputTypeSchemas/PersonsToSkillPathsIncludeSchema';

export const PersonsToSkillPathsArgsSchema: z.ZodType<Prisma.PersonsToSkillPathsDefaultArgs> = z.object({
  select: z.lazy(() => PersonsToSkillPathsSelectSchema).optional(),
  include: z.lazy(() => PersonsToSkillPathsIncludeSchema).optional(),
}).strict();

export default PersonsToSkillPathsArgsSchema;
