import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './PersonUpdateOneRequiredWithoutEnergiesNestedInputSchema';
import { EnergyUpdateOneRequiredWithoutExperiencesNestedInputSchema } from './EnergyUpdateOneRequiredWithoutExperiencesNestedInputSchema';

export const EnergiesToPersonsUpdateWithoutMeasurementsInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpdateWithoutMeasurementsInput> = z.object({
  person: z.lazy(() => PersonUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutExperiencesNestedInputSchema).optional()
}).strict();

export default EnergiesToPersonsUpdateWithoutMeasurementsInputSchema;
