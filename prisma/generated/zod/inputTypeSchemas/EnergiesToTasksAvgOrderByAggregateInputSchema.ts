import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToTasksAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToTasksAvgOrderByAggregateInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToTasksAvgOrderByAggregateInputSchema;
