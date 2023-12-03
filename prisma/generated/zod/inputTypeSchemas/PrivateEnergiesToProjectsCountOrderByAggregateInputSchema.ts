import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToProjectsCountOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCountOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToProjectsCountOrderByAggregateInputSchema;
