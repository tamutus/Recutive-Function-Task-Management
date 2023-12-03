import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TaskTemplateCountOrderByAggregateInputSchema } from './TaskTemplateCountOrderByAggregateInputSchema';
import { TaskTemplateAvgOrderByAggregateInputSchema } from './TaskTemplateAvgOrderByAggregateInputSchema';
import { TaskTemplateMaxOrderByAggregateInputSchema } from './TaskTemplateMaxOrderByAggregateInputSchema';
import { TaskTemplateMinOrderByAggregateInputSchema } from './TaskTemplateMinOrderByAggregateInputSchema';
import { TaskTemplateSumOrderByAggregateInputSchema } from './TaskTemplateSumOrderByAggregateInputSchema';

export const TaskTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.TaskTemplateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completionRequirements: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  schedule: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TaskTemplateCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TaskTemplateAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TaskTemplateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TaskTemplateMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TaskTemplateSumOrderByAggregateInputSchema).optional()
}).strict();

export default TaskTemplateOrderByWithAggregationInputSchema;
