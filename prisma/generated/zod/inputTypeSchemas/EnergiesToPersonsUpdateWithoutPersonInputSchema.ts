import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyUpdateOneRequiredWithoutExperiencesNestedInputSchema } from './EnergyUpdateOneRequiredWithoutExperiencesNestedInputSchema';
import { EnergyMeasurementUpdateManyWithoutExperienceNestedInputSchema } from './EnergyMeasurementUpdateManyWithoutExperienceNestedInputSchema';

export const EnergiesToPersonsUpdateWithoutPersonInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpdateWithoutPersonInput> = z.object({
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutExperiencesNestedInputSchema).optional(),
  measurements: z.lazy(() => EnergyMeasurementUpdateManyWithoutExperienceNestedInputSchema).optional()
}).strict();

export default EnergiesToPersonsUpdateWithoutPersonInputSchema;
