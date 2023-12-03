import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './PersonUpdateOneRequiredWithoutEnergiesNestedInputSchema';
import { EnergyUpdateOneRequiredWithoutExperiencesNestedInputSchema } from './EnergyUpdateOneRequiredWithoutExperiencesNestedInputSchema';
import { EnergyMeasurementUpdateManyWithoutExperienceNestedInputSchema } from './EnergyMeasurementUpdateManyWithoutExperienceNestedInputSchema';

export const EnergiesToPersonsUpdateInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpdateInput> = z.object({
  person: z.lazy(() => PersonUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutExperiencesNestedInputSchema).optional(),
  measurements: z.lazy(() => EnergyMeasurementUpdateManyWithoutExperienceNestedInputSchema).optional()
}).strict();

export default EnergiesToPersonsUpdateInputSchema;
