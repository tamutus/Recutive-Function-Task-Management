import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TaskTemplateLinkSumOrderByAggregateInputSchema: z.ZodType<Prisma.TaskTemplateLinkSumOrderByAggregateInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TaskTemplateLinkSumOrderByAggregateInputSchema;
