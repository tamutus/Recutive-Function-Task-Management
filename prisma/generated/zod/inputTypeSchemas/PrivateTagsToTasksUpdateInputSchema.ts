import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateOneRequiredWithoutTasksNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutTasksNestedInputSchema';
import { TaskUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './TaskUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';

export const PrivateTagsToTasksUpdateInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUpdateInput> = z.object({
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutTasksNestedInputSchema).optional(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional()
}).strict();

export default PrivateTagsToTasksUpdateInputSchema;
