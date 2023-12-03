import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateTagsToProjectTemplatesCountOrderByAggregateInputSchema } from './PrivateTagsToProjectTemplatesCountOrderByAggregateInputSchema';
import { PrivateTagsToProjectTemplatesAvgOrderByAggregateInputSchema } from './PrivateTagsToProjectTemplatesAvgOrderByAggregateInputSchema';
import { PrivateTagsToProjectTemplatesMaxOrderByAggregateInputSchema } from './PrivateTagsToProjectTemplatesMaxOrderByAggregateInputSchema';
import { PrivateTagsToProjectTemplatesMinOrderByAggregateInputSchema } from './PrivateTagsToProjectTemplatesMinOrderByAggregateInputSchema';
import { PrivateTagsToProjectTemplatesSumOrderByAggregateInputSchema } from './PrivateTagsToProjectTemplatesSumOrderByAggregateInputSchema';

export const PrivateTagsToProjectTemplatesOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesOrderByWithAggregationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  privateTagId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrivateTagsToProjectTemplatesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateTagsToProjectTemplatesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateTagsToProjectTemplatesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateTagsToProjectTemplatesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateTagsToProjectTemplatesSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateTagsToProjectTemplatesOrderByWithAggregationInputSchema;
