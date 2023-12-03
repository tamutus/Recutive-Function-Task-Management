import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToTaskTemplatesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToTaskTemplatesOrderByRelationAggregateInputSchema;
