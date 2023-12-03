import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { EnergyMeasurementUncheckedUpdateManyWithoutExperienceNestedInputSchema } from './EnergyMeasurementUncheckedUpdateManyWithoutExperienceNestedInputSchema';

export const EnergiesToPersonsUncheckedUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPersonsUncheckedUpdateWithoutEnergyInput> = z.object({
  personId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  measurements: z.lazy(() => EnergyMeasurementUncheckedUpdateManyWithoutExperienceNestedInputSchema).optional()
}).strict();

export default EnergiesToPersonsUncheckedUpdateWithoutEnergyInputSchema;
