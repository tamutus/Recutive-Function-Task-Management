import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsWhereInputSchema } from './PersonsToTagsWhereInputSchema';

export const PersonsToTagsListRelationFilterSchema: z.ZodType<Prisma.PersonsToTagsListRelationFilter> = z.object({
  every: z.lazy(() => PersonsToTagsWhereInputSchema).optional(),
  some: z.lazy(() => PersonsToTagsWhereInputSchema).optional(),
  none: z.lazy(() => PersonsToTagsWhereInputSchema).optional()
}).strict();

export default PersonsToTagsListRelationFilterSchema;
