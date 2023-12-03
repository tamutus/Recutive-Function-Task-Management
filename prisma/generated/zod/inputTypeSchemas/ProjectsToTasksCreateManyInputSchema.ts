import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTasksCreateManyInputSchema: z.ZodType<Prisma.ProjectsToTasksCreateManyInput> = z.object({
  projectId: z.number().int(),
  taskId: z.number().int()
}).strict();

export default ProjectsToTasksCreateManyInputSchema;
