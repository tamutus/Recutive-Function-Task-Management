import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateOneRequiredWithoutProjectsNestedInputSchema } from './TaskUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const ProjectsToTasksUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTasksUpdateWithoutProjectInput> = z.object({
  task: z.lazy(() => TaskUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default ProjectsToTasksUpdateWithoutProjectInputSchema;
