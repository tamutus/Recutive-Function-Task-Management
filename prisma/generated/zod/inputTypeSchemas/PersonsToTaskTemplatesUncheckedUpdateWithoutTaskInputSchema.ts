import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PersonsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUncheckedUpdateWithoutTaskInput> = z.object({
  personId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema;
