import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesWhereInputSchema } from './PersonsToProjectTemplatesWhereInputSchema';

export const PersonsToProjectTemplatesListRelationFilterSchema: z.ZodType<Prisma.PersonsToProjectTemplatesListRelationFilter> = z.object({
  every: z.lazy(() => PersonsToProjectTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => PersonsToProjectTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => PersonsToProjectTemplatesWhereInputSchema).optional()
}).strict();

export default PersonsToProjectTemplatesListRelationFilterSchema;
