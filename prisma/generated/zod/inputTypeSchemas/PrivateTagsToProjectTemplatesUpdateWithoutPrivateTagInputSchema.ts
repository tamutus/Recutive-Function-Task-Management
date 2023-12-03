import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';

export const PrivateTagsToProjectTemplatesUpdateWithoutPrivateTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpdateWithoutPrivateTagInput> = z.object({
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional()
}).strict();

export default PrivateTagsToProjectTemplatesUpdateWithoutPrivateTagInputSchema;
