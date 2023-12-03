import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToProjectsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToProjectsMaxOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToProjectsMaxOrderByAggregateInputSchema;
