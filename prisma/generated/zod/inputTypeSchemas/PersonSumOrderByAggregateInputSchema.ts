import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonSumOrderByAggregateInputSchema: z.ZodType<Prisma.PersonSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonSumOrderByAggregateInputSchema;
