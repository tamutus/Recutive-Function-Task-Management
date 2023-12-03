import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToProjectsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PersonsToProjectsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToProjectsOrderByRelationAggregateInputSchema;
