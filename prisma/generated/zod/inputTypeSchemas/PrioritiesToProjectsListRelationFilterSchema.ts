import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsWhereInputSchema } from './PrioritiesToProjectsWhereInputSchema';

export const PrioritiesToProjectsListRelationFilterSchema: z.ZodType<Prisma.PrioritiesToProjectsListRelationFilter> = z.object({
  every: z.lazy(() => PrioritiesToProjectsWhereInputSchema).optional(),
  some: z.lazy(() => PrioritiesToProjectsWhereInputSchema).optional(),
  none: z.lazy(() => PrioritiesToProjectsWhereInputSchema).optional()
}).strict();

export default PrioritiesToProjectsListRelationFilterSchema;
