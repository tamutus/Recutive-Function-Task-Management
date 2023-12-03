import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToProjectTemplatesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesMaxOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesMaxOrderByAggregateInputSchema;
