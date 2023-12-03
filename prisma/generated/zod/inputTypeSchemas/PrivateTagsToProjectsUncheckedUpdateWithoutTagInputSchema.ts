import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PrivateTagsToProjectsUncheckedUpdateWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUncheckedUpdateWithoutTagInput> = z.object({
  projectId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PrivateTagsToProjectsUncheckedUpdateWithoutTagInputSchema;
