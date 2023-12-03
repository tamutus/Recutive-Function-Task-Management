import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ProjectsToTagsUncheckedUpdateManyWithoutTagInputSchema: z.ZodType<Prisma.ProjectsToTagsUncheckedUpdateManyWithoutTagInput> = z.object({
  projectId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ProjectsToTagsUncheckedUpdateManyWithoutTagInputSchema;
