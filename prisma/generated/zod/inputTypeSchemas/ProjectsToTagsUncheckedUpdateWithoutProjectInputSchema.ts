import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const ProjectsToTagsUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTagsUncheckedUpdateWithoutProjectInput> = z.object({
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ProjectsToTagsUncheckedUpdateWithoutProjectInputSchema;
