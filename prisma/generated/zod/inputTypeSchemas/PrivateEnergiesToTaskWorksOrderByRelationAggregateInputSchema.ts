import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToTaskWorksOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToTaskWorksOrderByRelationAggregateInputSchema;
