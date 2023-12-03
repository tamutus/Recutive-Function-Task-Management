import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PersonsToTagsUncheckedUpdateManyWithoutFollowerInputSchema: z.ZodType<Prisma.PersonsToTagsUncheckedUpdateManyWithoutFollowerInput> = z.object({
  tagId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonsToTagsUncheckedUpdateManyWithoutFollowerInputSchema;
