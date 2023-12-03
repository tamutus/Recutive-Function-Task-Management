import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsWhereInputSchema } from './PersonsToProjectsWhereInputSchema';

export const PersonsToProjectsListRelationFilterSchema: z.ZodType<Prisma.PersonsToProjectsListRelationFilter> = z.object({
  every: z.lazy(() => PersonsToProjectsWhereInputSchema).optional(),
  some: z.lazy(() => PersonsToProjectsWhereInputSchema).optional(),
  none: z.lazy(() => PersonsToProjectsWhereInputSchema).optional()
}).strict();

export default PersonsToProjectsListRelationFilterSchema;
