import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToTaskTemplatesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesMaxOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToTaskTemplatesMaxOrderByAggregateInputSchema;
