import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToProjectsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToProjectsSumOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToProjectsSumOrderByAggregateInputSchema;
