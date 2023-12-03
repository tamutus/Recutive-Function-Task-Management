import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateOneRequiredWithoutTagsNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutTagsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutProjectTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutProjectTagsNestedInputSchema';

export const ProjectTemplatesToTagsUpdateWithoutTagInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateWithoutTagInput> = z.object({
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutProjectTagsNestedInputSchema).optional()
}).strict();

export default ProjectTemplatesToTagsUpdateWithoutTagInputSchema;
