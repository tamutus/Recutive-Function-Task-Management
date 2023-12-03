import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutEnergiesInputSchema } from './PersonCreateNestedOneWithoutEnergiesInputSchema';
import { EnergyCreateNestedOneWithoutExperiencesInputSchema } from './EnergyCreateNestedOneWithoutExperiencesInputSchema';
import { EnergyMeasurementCreateNestedManyWithoutExperienceInputSchema } from './EnergyMeasurementCreateNestedManyWithoutExperienceInputSchema';

export const EnergiesToPersonsCreateInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateInput> = z.object({
  person: z.lazy(() => PersonCreateNestedOneWithoutEnergiesInputSchema),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutExperiencesInputSchema),
  measurements: z.lazy(() => EnergyMeasurementCreateNestedManyWithoutExperienceInputSchema).optional()
}).strict();

export default EnergiesToPersonsCreateInputSchema;
