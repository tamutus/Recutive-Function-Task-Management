import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const TagsToTasksUncheckedUpdateWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTasksUncheckedUpdateWithoutTaskInput> = z.object({
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TagsToTasksUncheckedUpdateWithoutTaskInputSchema;
