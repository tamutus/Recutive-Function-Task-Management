import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToPersonsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EnergiesToPersonsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToPersonsOrderByRelationAggregateInputSchema;
