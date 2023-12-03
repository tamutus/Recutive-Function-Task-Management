import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsWhereInputSchema } from './PrioritiesToPrivateTagsWhereInputSchema';

export const PrioritiesToPrivateTagsListRelationFilterSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsListRelationFilter> = z.object({
  every: z.lazy(() => PrioritiesToPrivateTagsWhereInputSchema).optional(),
  some: z.lazy(() => PrioritiesToPrivateTagsWhereInputSchema).optional(),
  none: z.lazy(() => PrioritiesToPrivateTagsWhereInputSchema).optional()
}).strict();

export default PrioritiesToPrivateTagsListRelationFilterSchema;
