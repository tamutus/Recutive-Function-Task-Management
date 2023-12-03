import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergyCountOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergyCountOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  unit: z.lazy(() => SortOrderSchema).optional(),
  info: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  music: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergyCountOrderByAggregateInputSchema;
