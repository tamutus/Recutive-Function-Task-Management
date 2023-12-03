import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsWhereInputSchema } from './PrioritiesToTagsWhereInputSchema';

export const PrioritiesToTagsListRelationFilterSchema: z.ZodType<Prisma.PrioritiesToTagsListRelationFilter> = z.object({
  every: z.lazy(() => PrioritiesToTagsWhereInputSchema).optional(),
  some: z.lazy(() => PrioritiesToTagsWhereInputSchema).optional(),
  none: z.lazy(() => PrioritiesToTagsWhereInputSchema).optional()
}).strict();

export default PrioritiesToTagsListRelationFilterSchema;
