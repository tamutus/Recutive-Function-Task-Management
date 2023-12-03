import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateOneRequiredWithoutProjectsNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutProjectsNestedInputSchema';
import { ProjectUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './ProjectUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';

export const PrivateTagsToProjectsUpdateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUpdateInput> = z.object({
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutProjectsNestedInputSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional()
}).strict();

export default PrivateTagsToProjectsUpdateInputSchema;
