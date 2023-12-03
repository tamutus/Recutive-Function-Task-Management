import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TagsToTaskTemplatesSumOrderByAggregateInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesSumOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TagsToTaskTemplatesSumOrderByAggregateInputSchema;
