import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TaskLinkOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TaskLinkOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TaskLinkOrderByRelationAggregateInputSchema;
