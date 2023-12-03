import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToPrivateTagsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToPrivateTagsOrderByRelationAggregateInputSchema;
