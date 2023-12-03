import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutEnergiesInputSchema } from './PersonCreateNestedOneWithoutEnergiesInputSchema';
import { EnergyCreateNestedOneWithoutExperiencesInputSchema } from './EnergyCreateNestedOneWithoutExperiencesInputSchema';

export const EnergiesToPersonsCreateWithoutMeasurementsInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateWithoutMeasurementsInput> = z.object({
  person: z.lazy(() => PersonCreateNestedOneWithoutEnergiesInputSchema),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutExperiencesInputSchema)
}).strict();

export default EnergiesToPersonsCreateWithoutMeasurementsInputSchema;
