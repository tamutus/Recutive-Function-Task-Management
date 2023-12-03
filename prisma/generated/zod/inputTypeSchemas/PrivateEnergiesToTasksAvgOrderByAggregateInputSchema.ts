import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToTasksAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksAvgOrderByAggregateInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToTasksAvgOrderByAggregateInputSchema;
