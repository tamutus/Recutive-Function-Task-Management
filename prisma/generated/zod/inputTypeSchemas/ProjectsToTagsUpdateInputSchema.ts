import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateOneRequiredWithoutProjectsNestedInputSchema } from './TagUpdateOneRequiredWithoutProjectsNestedInputSchema';
import { ProjectUpdateOneRequiredWithoutTagsNestedInputSchema } from './ProjectUpdateOneRequiredWithoutTagsNestedInputSchema';

export const ProjectsToTagsUpdateInputSchema: z.ZodType<Prisma.ProjectsToTagsUpdateInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutProjectsNestedInputSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export default ProjectsToTagsUpdateInputSchema;
