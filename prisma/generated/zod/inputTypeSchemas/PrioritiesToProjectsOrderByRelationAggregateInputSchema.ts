import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToProjectsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrioritiesToProjectsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToProjectsOrderByRelationAggregateInputSchema;
