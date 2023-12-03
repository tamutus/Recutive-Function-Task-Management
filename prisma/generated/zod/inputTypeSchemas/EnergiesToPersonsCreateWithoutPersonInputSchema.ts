import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateNestedOneWithoutExperiencesInputSchema } from './EnergyCreateNestedOneWithoutExperiencesInputSchema';
import { EnergyMeasurementCreateNestedManyWithoutExperienceInputSchema } from './EnergyMeasurementCreateNestedManyWithoutExperienceInputSchema';

export const EnergiesToPersonsCreateWithoutPersonInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateWithoutPersonInput> = z.object({
  energy: z.lazy(() => EnergyCreateNestedOneWithoutExperiencesInputSchema),
  measurements: z.lazy(() => EnergyMeasurementCreateNestedManyWithoutExperienceInputSchema).optional()
}).strict();

export default EnergiesToPersonsCreateWithoutPersonInputSchema;
