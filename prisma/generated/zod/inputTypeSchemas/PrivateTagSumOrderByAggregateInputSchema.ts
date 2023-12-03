import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagSumOrderByAggregateInputSchema;
