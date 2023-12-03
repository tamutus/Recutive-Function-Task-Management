import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectTemplateCountOrderByAggregateInputSchema } from './ProjectTemplateCountOrderByAggregateInputSchema';
import { ProjectTemplateAvgOrderByAggregateInputSchema } from './ProjectTemplateAvgOrderByAggregateInputSchema';
import { ProjectTemplateMaxOrderByAggregateInputSchema } from './ProjectTemplateMaxOrderByAggregateInputSchema';
import { ProjectTemplateMinOrderByAggregateInputSchema } from './ProjectTemplateMinOrderByAggregateInputSchema';
import { ProjectTemplateSumOrderByAggregateInputSchema } from './ProjectTemplateSumOrderByAggregateInputSchema';

export const ProjectTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectTemplateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completionRequirements: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProjectTemplateCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProjectTemplateAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProjectTemplateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProjectTemplateMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProjectTemplateSumOrderByAggregateInputSchema).optional()
}).strict();

export default ProjectTemplateOrderByWithAggregationInputSchema;
