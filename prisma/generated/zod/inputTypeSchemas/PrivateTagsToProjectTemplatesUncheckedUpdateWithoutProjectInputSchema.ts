import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PrivateTagsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUncheckedUpdateWithoutProjectInput> = z.object({
  privateTagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PrivateTagsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema;
