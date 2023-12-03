import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToTagsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PersonsToTagsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToTagsOrderByRelationAggregateInputSchema;
