import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesWhereInputSchema } from './PersonsToTaskTemplatesWhereInputSchema';

export const PersonsToTaskTemplatesListRelationFilterSchema: z.ZodType<Prisma.PersonsToTaskTemplatesListRelationFilter> = z.object({
  every: z.lazy(() => PersonsToTaskTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => PersonsToTaskTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => PersonsToTaskTemplatesWhereInputSchema).optional()
}).strict();

export default PersonsToTaskTemplatesListRelationFilterSchema;
