import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToTaskTemplatesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesMaxOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToTaskTemplatesMaxOrderByAggregateInputSchema;
