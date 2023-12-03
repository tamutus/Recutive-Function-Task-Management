import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectTemplatesToTaskTemplatesCountOrderByAggregateInputSchema } from './ProjectTemplatesToTaskTemplatesCountOrderByAggregateInputSchema';
import { ProjectTemplatesToTaskTemplatesAvgOrderByAggregateInputSchema } from './ProjectTemplatesToTaskTemplatesAvgOrderByAggregateInputSchema';
import { ProjectTemplatesToTaskTemplatesMaxOrderByAggregateInputSchema } from './ProjectTemplatesToTaskTemplatesMaxOrderByAggregateInputSchema';
import { ProjectTemplatesToTaskTemplatesMinOrderByAggregateInputSchema } from './ProjectTemplatesToTaskTemplatesMinOrderByAggregateInputSchema';
import { ProjectTemplatesToTaskTemplatesSumOrderByAggregateInputSchema } from './ProjectTemplatesToTaskTemplatesSumOrderByAggregateInputSchema';

export const ProjectTemplatesToTaskTemplatesOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesOrderByWithAggregationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  schedule: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProjectTemplatesToTaskTemplatesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProjectTemplatesToTaskTemplatesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProjectTemplatesToTaskTemplatesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProjectTemplatesToTaskTemplatesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProjectTemplatesToTaskTemplatesSumOrderByAggregateInputSchema).optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesOrderByWithAggregationInputSchema;
