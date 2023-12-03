import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const EnergiesToPersonsUncheckedUpdateManyWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPersonsUncheckedUpdateManyWithoutEnergyInput> = z.object({
  personId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default EnergiesToPersonsUncheckedUpdateManyWithoutEnergyInputSchema;
