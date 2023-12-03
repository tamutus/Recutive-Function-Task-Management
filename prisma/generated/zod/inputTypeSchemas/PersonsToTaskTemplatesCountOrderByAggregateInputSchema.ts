import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToTaskTemplatesCountOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCountOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToTaskTemplatesCountOrderByAggregateInputSchema;
