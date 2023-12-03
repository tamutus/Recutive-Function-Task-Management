import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergySumOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergySumOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergySumOrderByAggregateInputSchema;
