import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectsToTasksMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectsToTasksMinOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectsToTasksMinOrderByAggregateInputSchema;
