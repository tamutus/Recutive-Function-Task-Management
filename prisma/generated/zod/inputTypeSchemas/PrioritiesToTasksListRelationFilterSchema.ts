import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksWhereInputSchema } from './PrioritiesToTasksWhereInputSchema';

export const PrioritiesToTasksListRelationFilterSchema: z.ZodType<Prisma.PrioritiesToTasksListRelationFilter> = z.object({
  every: z.lazy(() => PrioritiesToTasksWhereInputSchema).optional(),
  some: z.lazy(() => PrioritiesToTasksWhereInputSchema).optional(),
  none: z.lazy(() => PrioritiesToTasksWhereInputSchema).optional()
}).strict();

export default PrioritiesToTasksListRelationFilterSchema;
