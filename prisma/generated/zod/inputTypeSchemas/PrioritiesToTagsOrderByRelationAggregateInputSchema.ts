import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToTagsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrioritiesToTagsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToTagsOrderByRelationAggregateInputSchema;
