import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectTemplatesToTagsCountOrderByAggregateInputSchema } from './ProjectTemplatesToTagsCountOrderByAggregateInputSchema';
import { ProjectTemplatesToTagsAvgOrderByAggregateInputSchema } from './ProjectTemplatesToTagsAvgOrderByAggregateInputSchema';
import { ProjectTemplatesToTagsMaxOrderByAggregateInputSchema } from './ProjectTemplatesToTagsMaxOrderByAggregateInputSchema';
import { ProjectTemplatesToTagsMinOrderByAggregateInputSchema } from './ProjectTemplatesToTagsMinOrderByAggregateInputSchema';
import { ProjectTemplatesToTagsSumOrderByAggregateInputSchema } from './ProjectTemplatesToTagsSumOrderByAggregateInputSchema';

export const ProjectTemplatesToTagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsOrderByWithAggregationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProjectTemplatesToTagsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProjectTemplatesToTagsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProjectTemplatesToTagsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProjectTemplatesToTagsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProjectTemplatesToTagsSumOrderByAggregateInputSchema).optional()
}).strict();

export default ProjectTemplatesToTagsOrderByWithAggregationInputSchema;
