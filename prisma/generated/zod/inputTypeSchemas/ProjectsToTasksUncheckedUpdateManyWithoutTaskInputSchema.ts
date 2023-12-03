import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ProjectsToTasksUncheckedUpdateManyWithoutTaskInputSchema: z.ZodType<Prisma.ProjectsToTasksUncheckedUpdateManyWithoutTaskInput> = z.object({
  projectId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ProjectsToTasksUncheckedUpdateManyWithoutTaskInputSchema;
