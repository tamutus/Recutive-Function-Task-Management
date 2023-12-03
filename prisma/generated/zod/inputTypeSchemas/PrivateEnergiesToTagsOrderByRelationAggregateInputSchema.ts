import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToTagsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToTagsOrderByRelationAggregateInputSchema;
