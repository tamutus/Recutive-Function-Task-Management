import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToTagsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EnergiesToTagsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToTagsOrderByRelationAggregateInputSchema;
