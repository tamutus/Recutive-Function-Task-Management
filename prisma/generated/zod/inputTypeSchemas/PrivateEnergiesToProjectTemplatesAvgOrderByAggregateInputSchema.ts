import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToProjectTemplatesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesAvgOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesAvgOrderByAggregateInputSchema;
