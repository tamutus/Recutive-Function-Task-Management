import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToTaskTemplatesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToTaskTemplatesOrderByRelationAggregateInputSchema;
