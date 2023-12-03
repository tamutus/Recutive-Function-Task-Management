import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInputSchema: z.ZodType<Prisma.EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInput> = z.object({
  personId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  energyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInputSchema;
