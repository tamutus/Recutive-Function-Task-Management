import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectUpdateOneRequiredWithoutTagsNestedInputSchema } from './ProjectUpdateOneRequiredWithoutTagsNestedInputSchema';

export const ProjectsToTagsUpdateWithoutTagInputSchema: z.ZodType<Prisma.ProjectsToTagsUpdateWithoutTagInput> = z.object({
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export default ProjectsToTagsUpdateWithoutTagInputSchema;
