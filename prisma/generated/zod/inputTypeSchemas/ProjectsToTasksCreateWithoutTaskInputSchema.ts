import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedOneWithoutTasksInputSchema } from './ProjectCreateNestedOneWithoutTasksInputSchema';

export const ProjectsToTasksCreateWithoutTaskInputSchema: z.ZodType<Prisma.ProjectsToTasksCreateWithoutTaskInput> = z.object({
  project: z.lazy(() => ProjectCreateNestedOneWithoutTasksInputSchema)
}).strict();

export default ProjectsToTasksCreateWithoutTaskInputSchema;
