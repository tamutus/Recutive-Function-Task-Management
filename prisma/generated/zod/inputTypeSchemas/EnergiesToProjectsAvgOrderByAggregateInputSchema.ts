import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToProjectsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToProjectsAvgOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToProjectsAvgOrderByAggregateInputSchema;
