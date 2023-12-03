import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutPrivateTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutPrivateTagInput> = z.object({
  projectId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutPrivateTagInputSchema;
