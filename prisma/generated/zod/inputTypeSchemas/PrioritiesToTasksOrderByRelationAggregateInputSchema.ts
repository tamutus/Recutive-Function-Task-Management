import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToTasksOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrioritiesToTasksOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToTasksOrderByRelationAggregateInputSchema;
