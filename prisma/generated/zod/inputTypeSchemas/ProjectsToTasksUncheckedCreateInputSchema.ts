import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTasksUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectsToTasksUncheckedCreateInput> = z.object({
  projectId: z.number().int(),
  taskId: z.number().int()
}).strict();

export default ProjectsToTasksUncheckedCreateInputSchema;
