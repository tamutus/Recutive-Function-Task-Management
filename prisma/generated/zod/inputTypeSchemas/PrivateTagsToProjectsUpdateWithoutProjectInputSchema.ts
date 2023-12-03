import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateOneRequiredWithoutProjectsNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const PrivateTagsToProjectsUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUpdateWithoutProjectInput> = z.object({
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default PrivateTagsToProjectsUpdateWithoutProjectInputSchema;
