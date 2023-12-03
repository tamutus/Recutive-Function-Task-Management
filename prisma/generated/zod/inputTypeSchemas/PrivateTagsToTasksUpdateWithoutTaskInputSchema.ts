import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateOneRequiredWithoutTasksNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutTasksNestedInputSchema';

export const PrivateTagsToTasksUpdateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUpdateWithoutTaskInput> = z.object({
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export default PrivateTagsToTasksUpdateWithoutTaskInputSchema;
