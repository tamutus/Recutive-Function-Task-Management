import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PersonsToTagsUncheckedUpdateWithoutTagInputSchema: z.ZodType<Prisma.PersonsToTagsUncheckedUpdateWithoutTagInput> = z.object({
  followerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonsToTagsUncheckedUpdateWithoutTagInputSchema;
