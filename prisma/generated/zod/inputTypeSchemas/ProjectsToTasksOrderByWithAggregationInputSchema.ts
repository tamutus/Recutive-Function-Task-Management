import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectsToTasksCountOrderByAggregateInputSchema } from './ProjectsToTasksCountOrderByAggregateInputSchema';
import { ProjectsToTasksAvgOrderByAggregateInputSchema } from './ProjectsToTasksAvgOrderByAggregateInputSchema';
import { ProjectsToTasksMaxOrderByAggregateInputSchema } from './ProjectsToTasksMaxOrderByAggregateInputSchema';
import { ProjectsToTasksMinOrderByAggregateInputSchema } from './ProjectsToTasksMinOrderByAggregateInputSchema';
import { ProjectsToTasksSumOrderByAggregateInputSchema } from './ProjectsToTasksSumOrderByAggregateInputSchema';

export const ProjectsToTasksOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectsToTasksOrderByWithAggregationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProjectsToTasksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProjectsToTasksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProjectsToTasksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProjectsToTasksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProjectsToTasksSumOrderByAggregateInputSchema).optional()
}).strict();

export default ProjectsToTasksOrderByWithAggregationInputSchema;
