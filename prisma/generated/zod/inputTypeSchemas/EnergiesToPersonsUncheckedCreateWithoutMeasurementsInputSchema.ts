import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema: z.ZodType<Prisma.EnergiesToPersonsUncheckedCreateWithoutMeasurementsInput> = z.object({
  personId: z.number().int(),
  energyId: z.number().int()
}).strict();

export default EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema;
