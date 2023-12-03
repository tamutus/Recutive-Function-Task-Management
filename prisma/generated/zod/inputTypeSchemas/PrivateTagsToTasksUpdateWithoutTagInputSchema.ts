import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './TaskUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';

export const PrivateTagsToTasksUpdateWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUpdateWithoutTagInput> = z.object({
  task: z.lazy(() => TaskUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional()
}).strict();

export default PrivateTagsToTasksUpdateWithoutTagInputSchema;
