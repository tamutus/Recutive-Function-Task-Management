import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateTagsToTaskTemplatesCountOrderByAggregateInputSchema } from './PrivateTagsToTaskTemplatesCountOrderByAggregateInputSchema';
import { PrivateTagsToTaskTemplatesAvgOrderByAggregateInputSchema } from './PrivateTagsToTaskTemplatesAvgOrderByAggregateInputSchema';
import { PrivateTagsToTaskTemplatesMaxOrderByAggregateInputSchema } from './PrivateTagsToTaskTemplatesMaxOrderByAggregateInputSchema';
import { PrivateTagsToTaskTemplatesMinOrderByAggregateInputSchema } from './PrivateTagsToTaskTemplatesMinOrderByAggregateInputSchema';
import { PrivateTagsToTaskTemplatesSumOrderByAggregateInputSchema } from './PrivateTagsToTaskTemplatesSumOrderByAggregateInputSchema';

export const PrivateTagsToTaskTemplatesOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesOrderByWithAggregationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrivateTagsToTaskTemplatesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateTagsToTaskTemplatesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateTagsToTaskTemplatesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateTagsToTaskTemplatesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateTagsToTaskTemplatesSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateTagsToTaskTemplatesOrderByWithAggregationInputSchema;
