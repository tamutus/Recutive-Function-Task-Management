import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToTasksOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EnergiesToTasksOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToTasksOrderByRelationAggregateInputSchema;
