import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TaskTemplateLinkCountOrderByAggregateInputSchema } from './TaskTemplateLinkCountOrderByAggregateInputSchema';
import { TaskTemplateLinkAvgOrderByAggregateInputSchema } from './TaskTemplateLinkAvgOrderByAggregateInputSchema';
import { TaskTemplateLinkMaxOrderByAggregateInputSchema } from './TaskTemplateLinkMaxOrderByAggregateInputSchema';
import { TaskTemplateLinkMinOrderByAggregateInputSchema } from './TaskTemplateLinkMinOrderByAggregateInputSchema';
import { TaskTemplateLinkSumOrderByAggregateInputSchema } from './TaskTemplateLinkSumOrderByAggregateInputSchema';

export const TaskTemplateLinkOrderByWithAggregationInputSchema: z.ZodType<Prisma.TaskTemplateLinkOrderByWithAggregationInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  linkType: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TaskTemplateLinkCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TaskTemplateLinkAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TaskTemplateLinkMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TaskTemplateLinkMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TaskTemplateLinkSumOrderByAggregateInputSchema).optional()
}).strict();

export default TaskTemplateLinkOrderByWithAggregationInputSchema;
