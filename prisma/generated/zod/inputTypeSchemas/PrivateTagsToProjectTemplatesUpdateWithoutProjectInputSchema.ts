import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema';

export const PrivateTagsToProjectTemplatesUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpdateWithoutProjectInput> = z.object({
  privateTag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema).optional()
}).strict();

export default PrivateTagsToProjectTemplatesUpdateWithoutProjectInputSchema;
