import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToTaskWorksOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToTaskWorksOrderByRelationAggregateInputSchema;
