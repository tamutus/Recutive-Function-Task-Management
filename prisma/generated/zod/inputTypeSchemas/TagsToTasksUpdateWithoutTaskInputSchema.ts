import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateOneRequiredWithoutTasksNestedInputSchema } from './TagUpdateOneRequiredWithoutTasksNestedInputSchema';

export const TagsToTasksUpdateWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTasksUpdateWithoutTaskInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export default TagsToTasksUpdateWithoutTaskInputSchema;
