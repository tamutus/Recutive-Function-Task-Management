import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToProjectTemplatesMinOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesMinOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  info: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToProjectTemplatesMinOrderByAggregateInputSchema;
