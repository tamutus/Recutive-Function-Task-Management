import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTasksUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.ProjectsToTasksUncheckedCreateWithoutTaskInput> = z.object({
  projectId: z.number().int()
}).strict();

export default ProjectsToTasksUncheckedCreateWithoutTaskInputSchema;
