import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTasksCreateManyTaskInputSchema: z.ZodType<Prisma.ProjectsToTasksCreateManyTaskInput> = z.object({
  projectId: z.number().int()
}).strict();

export default ProjectsToTasksCreateManyTaskInputSchema;
