import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToTaskTemplatesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesAvgOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToTaskTemplatesAvgOrderByAggregateInputSchema;
