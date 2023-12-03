import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToProjectsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToProjectsAvgOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToProjectsAvgOrderByAggregateInputSchema;
