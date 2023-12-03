import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsWhereInputSchema } from './PersonsToSkillsWhereInputSchema';

export const PersonsToSkillsListRelationFilterSchema: z.ZodType<Prisma.PersonsToSkillsListRelationFilter> = z.object({
  every: z.lazy(() => PersonsToSkillsWhereInputSchema).optional(),
  some: z.lazy(() => PersonsToSkillsWhereInputSchema).optional(),
  none: z.lazy(() => PersonsToSkillsWhereInputSchema).optional()
}).strict();

export default PersonsToSkillsListRelationFilterSchema;
