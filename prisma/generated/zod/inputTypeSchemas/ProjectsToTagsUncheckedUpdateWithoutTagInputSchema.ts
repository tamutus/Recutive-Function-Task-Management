import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ProjectsToTagsUncheckedUpdateWithoutTagInputSchema: z.ZodType<Prisma.ProjectsToTagsUncheckedUpdateWithoutTagInput> = z.object({
  projectId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ProjectsToTagsUncheckedUpdateWithoutTagInputSchema;
