import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateOneRequiredWithoutTagsNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema } from './TagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema';

export const ProjectTemplatesToTagsUpdateWithoutTaggerInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateWithoutTaggerInput> = z.object({
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema).optional()
}).strict();

export default ProjectTemplatesToTagsUpdateWithoutTaggerInputSchema;
