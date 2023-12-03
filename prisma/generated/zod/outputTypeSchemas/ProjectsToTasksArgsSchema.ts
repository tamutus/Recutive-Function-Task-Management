import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTasksSelectSchema } from '../inputTypeSchemas/ProjectsToTasksSelectSchema';
import { ProjectsToTasksIncludeSchema } from '../inputTypeSchemas/ProjectsToTasksIncludeSchema';

export const ProjectsToTasksArgsSchema: z.ZodType<Prisma.ProjectsToTasksDefaultArgs> = z.object({
  select: z.lazy(() => ProjectsToTasksSelectSchema).optional(),
  include: z.lazy(() => ProjectsToTasksIncludeSchema).optional(),
}).strict();

export default ProjectsToTasksArgsSchema;
