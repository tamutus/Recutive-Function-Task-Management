import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInputSchema } from './EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInputSchema';

export const EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.EnergiesToPersonsUncheckedCreateWithoutPersonInput> = z.object({
  energyId: z.number().int(),
  measurements: z.lazy(() => EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInputSchema).optional()
}).strict();

export default EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema;
