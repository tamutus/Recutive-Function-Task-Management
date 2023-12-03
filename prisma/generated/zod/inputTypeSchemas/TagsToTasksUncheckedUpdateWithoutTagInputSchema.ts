import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const TagsToTasksUncheckedUpdateWithoutTagInputSchema: z.ZodType<Prisma.TagsToTasksUncheckedUpdateWithoutTagInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TagsToTasksUncheckedUpdateWithoutTagInputSchema;
