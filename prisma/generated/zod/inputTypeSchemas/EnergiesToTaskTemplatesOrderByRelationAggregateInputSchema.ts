import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToTaskTemplatesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToTaskTemplatesOrderByRelationAggregateInputSchema;
