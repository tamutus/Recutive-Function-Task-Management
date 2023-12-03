import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTasksUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTasksUncheckedCreateWithoutProjectInput> = z.object({
  taskId: z.number().int()
}).strict();

export default ProjectsToTasksUncheckedCreateWithoutProjectInputSchema;
