import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedOneWithoutProjectsInputSchema } from './TaskCreateNestedOneWithoutProjectsInputSchema';

export const ProjectsToTasksCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTasksCreateWithoutProjectInput> = z.object({
  task: z.lazy(() => TaskCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default ProjectsToTasksCreateWithoutProjectInputSchema;
