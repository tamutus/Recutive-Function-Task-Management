import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema';

export const PrivateTagsToTaskTemplatesUpdateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpdateWithoutTaskInput> = z.object({
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema).optional()
}).strict();

export default PrivateTagsToTaskTemplatesUpdateWithoutTaskInputSchema;
