import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectsToTasksProjectIdTaskIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProjectsToTasksProjectIdTaskIdCompoundUniqueInput> = z.object({
  projectId: z.number(),
  taskId: z.number()
}).strict();

export default ProjectsToTasksProjectIdTaskIdCompoundUniqueInputSchema;
