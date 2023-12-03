import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PersonsToTaskTemplatesUncheckedUpdateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUncheckedUpdateWithoutPersonInput> = z.object({
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonsToTaskTemplatesUncheckedUpdateWithoutPersonInputSchema;
