import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInputSchema } from './EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInputSchema';

export const EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPersonsUncheckedCreateWithoutEnergyInput> = z.object({
  personId: z.number().int(),
  measurements: z.lazy(() => EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInputSchema).optional()
}).strict();

export default EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema;
