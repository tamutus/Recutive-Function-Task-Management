import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToProjectTemplatesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToProjectTemplatesOrderByRelationAggregateInputSchema;
