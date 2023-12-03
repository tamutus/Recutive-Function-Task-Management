import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutEnergiesInputSchema } from './PersonCreateNestedOneWithoutEnergiesInputSchema';
import { EnergyMeasurementCreateNestedManyWithoutExperienceInputSchema } from './EnergyMeasurementCreateNestedManyWithoutExperienceInputSchema';

export const EnergiesToPersonsCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateWithoutEnergyInput> = z.object({
  person: z.lazy(() => PersonCreateNestedOneWithoutEnergiesInputSchema),
  measurements: z.lazy(() => EnergyMeasurementCreateNestedManyWithoutExperienceInputSchema).optional()
}).strict();

export default EnergiesToPersonsCreateWithoutEnergyInputSchema;
