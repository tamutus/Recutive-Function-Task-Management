import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TaskLinkCountOrderByAggregateInputSchema: z.ZodType<Prisma.TaskLinkCountOrderByAggregateInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  linkType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TaskLinkCountOrderByAggregateInputSchema;
