import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';
import { PrivateTagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema';

export const PrivateTagsToProjectTemplatesUpdateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpdateInput> = z.object({
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional(),
  privateTag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema).optional()
}).strict();

export default PrivateTagsToProjectTemplatesUpdateInputSchema;
