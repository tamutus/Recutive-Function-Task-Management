import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TaskLinkMinOrderByAggregateInputSchema: z.ZodType<Prisma.TaskLinkMinOrderByAggregateInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  linkType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TaskLinkMinOrderByAggregateInputSchema;
