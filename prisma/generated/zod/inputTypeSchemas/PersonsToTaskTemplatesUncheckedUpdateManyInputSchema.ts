import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PersonsToTaskTemplatesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUncheckedUpdateManyInput> = z.object({
  personId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  taskId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonsToTaskTemplatesUncheckedUpdateManyInputSchema;
