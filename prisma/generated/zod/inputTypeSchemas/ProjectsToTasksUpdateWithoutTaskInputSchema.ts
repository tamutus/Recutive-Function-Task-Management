import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectUpdateOneRequiredWithoutTasksNestedInputSchema } from './ProjectUpdateOneRequiredWithoutTasksNestedInputSchema';

export const ProjectsToTasksUpdateWithoutTaskInputSchema: z.ZodType<Prisma.ProjectsToTasksUpdateWithoutTaskInput> = z.object({
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export default ProjectsToTasksUpdateWithoutTaskInputSchema;
