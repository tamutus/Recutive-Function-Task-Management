import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const TagsToTaskTemplatesUncheckedUpdateManyWithoutTagInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUncheckedUpdateManyWithoutTagInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  taggerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TagsToTaskTemplatesUncheckedUpdateManyWithoutTagInputSchema;
