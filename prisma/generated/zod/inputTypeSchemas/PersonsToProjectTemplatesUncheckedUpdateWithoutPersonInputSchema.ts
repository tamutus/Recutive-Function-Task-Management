import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PersonsToProjectTemplatesUncheckedUpdateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUncheckedUpdateWithoutPersonInput> = z.object({
  projectId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonsToProjectTemplatesUncheckedUpdateWithoutPersonInputSchema;
