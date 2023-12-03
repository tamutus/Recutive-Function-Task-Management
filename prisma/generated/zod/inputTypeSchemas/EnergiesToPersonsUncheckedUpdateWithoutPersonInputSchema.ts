import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { EnergyMeasurementUncheckedUpdateManyWithoutExperienceNestedInputSchema } from './EnergyMeasurementUncheckedUpdateManyWithoutExperienceNestedInputSchema';

export const EnergiesToPersonsUncheckedUpdateWithoutPersonInputSchema: z.ZodType<Prisma.EnergiesToPersonsUncheckedUpdateWithoutPersonInput> = z.object({
  energyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  measurements: z.lazy(() => EnergyMeasurementUncheckedUpdateManyWithoutExperienceNestedInputSchema).optional()
}).strict();

export default EnergiesToPersonsUncheckedUpdateWithoutPersonInputSchema;
