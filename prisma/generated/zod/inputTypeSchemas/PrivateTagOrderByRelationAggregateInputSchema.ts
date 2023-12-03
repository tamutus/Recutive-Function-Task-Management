import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrivateTagOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagOrderByRelationAggregateInputSchema;
