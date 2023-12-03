import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToTaskTemplatesMinOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesMinOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToTaskTemplatesMinOrderByAggregateInputSchema;
