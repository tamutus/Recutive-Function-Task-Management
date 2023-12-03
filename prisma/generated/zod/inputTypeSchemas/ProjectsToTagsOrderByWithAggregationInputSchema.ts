import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectsToTagsCountOrderByAggregateInputSchema } from './ProjectsToTagsCountOrderByAggregateInputSchema';
import { ProjectsToTagsAvgOrderByAggregateInputSchema } from './ProjectsToTagsAvgOrderByAggregateInputSchema';
import { ProjectsToTagsMaxOrderByAggregateInputSchema } from './ProjectsToTagsMaxOrderByAggregateInputSchema';
import { ProjectsToTagsMinOrderByAggregateInputSchema } from './ProjectsToTagsMinOrderByAggregateInputSchema';
import { ProjectsToTagsSumOrderByAggregateInputSchema } from './ProjectsToTagsSumOrderByAggregateInputSchema';

export const ProjectsToTagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectsToTagsOrderByWithAggregationInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProjectsToTagsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProjectsToTagsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProjectsToTagsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProjectsToTagsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProjectsToTagsSumOrderByAggregateInputSchema).optional()
}).strict();

export default ProjectsToTagsOrderByWithAggregationInputSchema;
