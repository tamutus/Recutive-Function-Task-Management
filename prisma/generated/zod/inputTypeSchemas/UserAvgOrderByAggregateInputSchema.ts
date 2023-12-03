import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UserAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserAvgOrderByAggregateInputSchema;
