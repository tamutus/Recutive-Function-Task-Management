import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToTasksSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksSumOrderByAggregateInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToTasksSumOrderByAggregateInputSchema;
