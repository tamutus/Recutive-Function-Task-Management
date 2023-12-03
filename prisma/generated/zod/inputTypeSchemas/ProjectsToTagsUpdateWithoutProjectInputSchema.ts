import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateOneRequiredWithoutProjectsNestedInputSchema } from './TagUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const ProjectsToTagsUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTagsUpdateWithoutProjectInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default ProjectsToTagsUpdateWithoutProjectInputSchema;
