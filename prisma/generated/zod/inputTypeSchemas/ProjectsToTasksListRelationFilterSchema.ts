import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksWhereInputSchema } from './ProjectsToTasksWhereInputSchema';

export const ProjectsToTasksListRelationFilterSchema: z.ZodType<Prisma.ProjectsToTasksListRelationFilter> = z.object({
  every: z.lazy(() => ProjectsToTasksWhereInputSchema).optional(),
  some: z.lazy(() => ProjectsToTasksWhereInputSchema).optional(),
  none: z.lazy(() => ProjectsToTasksWhereInputSchema).optional()
}).strict();

export default ProjectsToTasksListRelationFilterSchema;
