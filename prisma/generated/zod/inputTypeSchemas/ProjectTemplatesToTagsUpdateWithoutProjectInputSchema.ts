import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema } from './TagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema';
import { PersonUpdateOneRequiredWithoutProjectTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutProjectTagsNestedInputSchema';

export const ProjectTemplatesToTagsUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateWithoutProjectInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutProjectTagsNestedInputSchema).optional()
}).strict();

export default ProjectTemplatesToTagsUpdateWithoutProjectInputSchema;
