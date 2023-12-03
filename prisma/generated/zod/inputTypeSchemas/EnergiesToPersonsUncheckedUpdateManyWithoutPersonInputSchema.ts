import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const EnergiesToPersonsUncheckedUpdateManyWithoutPersonInputSchema: z.ZodType<Prisma.EnergiesToPersonsUncheckedUpdateManyWithoutPersonInput> = z.object({
  energyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default EnergiesToPersonsUncheckedUpdateManyWithoutPersonInputSchema;
