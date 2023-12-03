import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EnergyAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergyAvgOrderByAggregateInputSchema;
