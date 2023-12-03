import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TaskTemplateSumOrderByAggregateInputSchema: z.ZodType<Prisma.TaskTemplateSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TaskTemplateSumOrderByAggregateInputSchema;
