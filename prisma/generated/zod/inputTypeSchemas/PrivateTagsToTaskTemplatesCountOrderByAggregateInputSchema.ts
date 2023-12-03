import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagsToTaskTemplatesCountOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCountOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagsToTaskTemplatesCountOrderByAggregateInputSchema;
