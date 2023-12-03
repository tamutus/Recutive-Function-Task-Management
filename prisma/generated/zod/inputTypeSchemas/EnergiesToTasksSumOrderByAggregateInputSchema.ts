import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToTasksSumOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToTasksSumOrderByAggregateInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToTasksSumOrderByAggregateInputSchema;
