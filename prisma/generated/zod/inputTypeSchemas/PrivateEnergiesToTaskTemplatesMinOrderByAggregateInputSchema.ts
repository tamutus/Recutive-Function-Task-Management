import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToTaskTemplatesMinOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesMinOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToTaskTemplatesMinOrderByAggregateInputSchema;
