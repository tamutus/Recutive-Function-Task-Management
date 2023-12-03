import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateOneRequiredWithoutTagsNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema } from './TagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema';
import { PersonUpdateOneRequiredWithoutProjectTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutProjectTagsNestedInputSchema';

export const ProjectTemplatesToTagsUpdateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateInput> = z.object({
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutProjectTagsNestedInputSchema).optional()
}).strict();

export default ProjectTemplatesToTagsUpdateInputSchema;
