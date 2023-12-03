import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const TagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUncheckedUpdateWithoutTagInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  taggerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema;
