import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectInput> = z.object({
  privateTagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema;
