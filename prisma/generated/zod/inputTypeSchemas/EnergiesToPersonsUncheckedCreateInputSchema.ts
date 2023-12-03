import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInputSchema } from './EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInputSchema';

export const EnergiesToPersonsUncheckedCreateInputSchema: z.ZodType<Prisma.EnergiesToPersonsUncheckedCreateInput> = z.object({
  personId: z.number().int(),
  energyId: z.number().int(),
  measurements: z.lazy(() => EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInputSchema).optional()
}).strict();

export default EnergiesToPersonsUncheckedCreateInputSchema;
