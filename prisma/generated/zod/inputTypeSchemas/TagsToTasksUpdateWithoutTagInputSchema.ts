import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateOneRequiredWithoutTagsNestedInputSchema } from './TaskUpdateOneRequiredWithoutTagsNestedInputSchema';

export const TagsToTasksUpdateWithoutTagInputSchema: z.ZodType<Prisma.TagsToTasksUpdateWithoutTagInput> = z.object({
  task: z.lazy(() => TaskUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export default TagsToTasksUpdateWithoutTagInputSchema;
