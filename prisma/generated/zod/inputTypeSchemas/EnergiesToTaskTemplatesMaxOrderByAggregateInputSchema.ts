import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToTaskTemplatesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesMaxOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  info: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToTaskTemplatesMaxOrderByAggregateInputSchema;
