import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateOneRequiredWithoutTasksNestedInputSchema } from './TagUpdateOneRequiredWithoutTasksNestedInputSchema';
import { TaskUpdateOneRequiredWithoutTagsNestedInputSchema } from './TaskUpdateOneRequiredWithoutTagsNestedInputSchema';

export const TagsToTasksUpdateInputSchema: z.ZodType<Prisma.TagsToTasksUpdateInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutTasksNestedInputSchema).optional(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export default TagsToTasksUpdateInputSchema;
