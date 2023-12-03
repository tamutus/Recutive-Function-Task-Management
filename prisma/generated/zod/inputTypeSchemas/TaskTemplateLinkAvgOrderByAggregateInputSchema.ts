import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TaskTemplateLinkAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TaskTemplateLinkAvgOrderByAggregateInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TaskTemplateLinkAvgOrderByAggregateInputSchema;
