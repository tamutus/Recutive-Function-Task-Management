import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PersonsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUncheckedUpdateManyWithoutTaskInput> = z.object({
  personId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema;
