import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerInputSchema;
