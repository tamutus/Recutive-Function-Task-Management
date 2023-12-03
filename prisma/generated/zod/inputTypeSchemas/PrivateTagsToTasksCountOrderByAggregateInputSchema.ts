import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToTasksCountOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToTasksCountOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToTasksCountOrderByAggregateInputSchema;
