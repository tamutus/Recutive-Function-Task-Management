import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergyAvgOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergyAvgOrderByAggregateInputSchema;
