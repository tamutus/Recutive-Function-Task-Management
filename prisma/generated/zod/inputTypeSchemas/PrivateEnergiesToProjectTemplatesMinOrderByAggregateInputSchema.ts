import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToProjectTemplatesMinOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesMinOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesMinOrderByAggregateInputSchema;
