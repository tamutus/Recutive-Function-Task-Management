import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './PersonUpdateOneRequiredWithoutEnergiesNestedInputSchema';
import { EnergyMeasurementUpdateManyWithoutExperienceNestedInputSchema } from './EnergyMeasurementUpdateManyWithoutExperienceNestedInputSchema';

export const EnergiesToPersonsUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpdateWithoutEnergyInput> = z.object({
  person: z.lazy(() => PersonUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional(),
  measurements: z.lazy(() => EnergyMeasurementUpdateManyWithoutExperienceNestedInputSchema).optional()
}).strict();

export default EnergiesToPersonsUpdateWithoutEnergyInputSchema;
