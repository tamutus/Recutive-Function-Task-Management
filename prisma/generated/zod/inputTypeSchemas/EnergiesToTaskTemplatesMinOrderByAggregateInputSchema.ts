import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToTaskTemplatesMinOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesMinOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  info: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToTaskTemplatesMinOrderByAggregateInputSchema;
