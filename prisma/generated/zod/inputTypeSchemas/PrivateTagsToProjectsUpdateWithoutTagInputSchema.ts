import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './ProjectUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';

export const PrivateTagsToProjectsUpdateWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUpdateWithoutTagInput> = z.object({
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional()
}).strict();

export default PrivateTagsToProjectsUpdateWithoutTagInputSchema;
