import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const ProjectsToTasksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectsToTasksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectsToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectsToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectsToTasksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectsToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectsToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default ProjectsToTasksScalarWhereWithAggregatesInputSchema;
