import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TagsToTaskTemplatesCountOrderByAggregateInputSchema } from './TagsToTaskTemplatesCountOrderByAggregateInputSchema';
import { TagsToTaskTemplatesAvgOrderByAggregateInputSchema } from './TagsToTaskTemplatesAvgOrderByAggregateInputSchema';
import { TagsToTaskTemplatesMaxOrderByAggregateInputSchema } from './TagsToTaskTemplatesMaxOrderByAggregateInputSchema';
import { TagsToTaskTemplatesMinOrderByAggregateInputSchema } from './TagsToTaskTemplatesMinOrderByAggregateInputSchema';
import { TagsToTaskTemplatesSumOrderByAggregateInputSchema } from './TagsToTaskTemplatesSumOrderByAggregateInputSchema';

export const TagsToTaskTemplatesOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesOrderByWithAggregationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagsToTaskTemplatesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TagsToTaskTemplatesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagsToTaskTemplatesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagsToTaskTemplatesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TagsToTaskTemplatesSumOrderByAggregateInputSchema).optional()
}).strict();

export default TagsToTaskTemplatesOrderByWithAggregationInputSchema;
