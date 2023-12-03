import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToTasksOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToTasksOrderByRelationAggregateInputSchema;
