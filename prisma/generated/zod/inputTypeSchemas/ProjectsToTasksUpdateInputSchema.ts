import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectUpdateOneRequiredWithoutTasksNestedInputSchema } from './ProjectUpdateOneRequiredWithoutTasksNestedInputSchema';
import { TaskUpdateOneRequiredWithoutProjectsNestedInputSchema } from './TaskUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const ProjectsToTasksUpdateInputSchema: z.ZodType<Prisma.ProjectsToTasksUpdateInput> = z.object({
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutTasksNestedInputSchema).optional(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default ProjectsToTasksUpdateInputSchema;
