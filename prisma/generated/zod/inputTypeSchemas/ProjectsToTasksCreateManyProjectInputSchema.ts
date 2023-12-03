import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTasksCreateManyProjectInputSchema: z.ZodType<Prisma.ProjectsToTasksCreateManyProjectInput> = z.object({
  taskId: z.number().int()
}).strict();

export default ProjectsToTasksCreateManyProjectInputSchema;
