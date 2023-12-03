import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ProjectsToTasksUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTasksUncheckedUpdateWithoutProjectInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ProjectsToTasksUncheckedUpdateWithoutProjectInputSchema;
