import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EnergyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  unit: z.lazy(() => SortOrderSchema).optional(),
  info: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergyMaxOrderByAggregateInputSchema;
