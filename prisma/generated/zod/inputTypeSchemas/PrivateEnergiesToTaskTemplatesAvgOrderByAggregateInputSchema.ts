import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToTaskTemplatesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesAvgOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToTaskTemplatesAvgOrderByAggregateInputSchema;
