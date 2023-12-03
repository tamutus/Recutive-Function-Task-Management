import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const TagsToTaskTemplatesUncheckedUpdateWithoutTaggerInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUncheckedUpdateWithoutTaggerInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TagsToTaskTemplatesUncheckedUpdateWithoutTaggerInputSchema;
