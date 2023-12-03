import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsWhereInputSchema } from './PersonsToSkillPathsWhereInputSchema';

export const PersonsToSkillPathsListRelationFilterSchema: z.ZodType<Prisma.PersonsToSkillPathsListRelationFilter> = z.object({
  every: z.lazy(() => PersonsToSkillPathsWhereInputSchema).optional(),
  some: z.lazy(() => PersonsToSkillPathsWhereInputSchema).optional(),
  none: z.lazy(() => PersonsToSkillPathsWhereInputSchema).optional()
}).strict();

export default PersonsToSkillPathsListRelationFilterSchema;
