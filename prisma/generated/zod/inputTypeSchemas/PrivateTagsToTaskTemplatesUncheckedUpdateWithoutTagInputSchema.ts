import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTagInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PrivateTagsToTaskTemplatesUncheckedUpdateWithoutTagInputSchema;