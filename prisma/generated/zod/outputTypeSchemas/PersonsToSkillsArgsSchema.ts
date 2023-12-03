import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillsSelectSchema } from '../inputTypeSchemas/PersonsToSkillsSelectSchema';
import { PersonsToSkillsIncludeSchema } from '../inputTypeSchemas/PersonsToSkillsIncludeSchema';

export const PersonsToSkillsArgsSchema: z.ZodType<Prisma.PersonsToSkillsDefaultArgs> = z.object({
  select: z.lazy(() => PersonsToSkillsSelectSchema).optional(),
  include: z.lazy(() => PersonsToSkillsIncludeSchema).optional(),
}).strict();

export default PersonsToSkillsArgsSchema;
