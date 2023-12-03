import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedOneWithoutTasksInputSchema } from './ProjectCreateNestedOneWithoutTasksInputSchema';
import { TaskCreateNestedOneWithoutProjectsInputSchema } from './TaskCreateNestedOneWithoutProjectsInputSchema';

export const ProjectsToTasksCreateInputSchema: z.ZodType<Prisma.ProjectsToTasksCreateInput> = z.object({
  project: z.lazy(() => ProjectCreateNestedOneWithoutTasksInputSchema),
  task: z.lazy(() => TaskCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default ProjectsToTasksCreateInputSchema;
