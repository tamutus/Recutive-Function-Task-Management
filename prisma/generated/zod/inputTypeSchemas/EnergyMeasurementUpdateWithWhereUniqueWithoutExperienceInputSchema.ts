import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementWhereUniqueInputSchema } from './EnergyMeasurementWhereUniqueInputSchema';
import { EnergyMeasurementUpdateWithoutExperienceInputSchema } from './EnergyMeasurementUpdateWithoutExperienceInputSchema';
import { EnergyMeasurementUncheckedUpdateWithoutExperienceInputSchema } from './EnergyMeasurementUncheckedUpdateWithoutExperienceInputSchema';

export const EnergyMeasurementUpdateWithWhereUniqueWithoutExperienceInputSchema: z.ZodType<Prisma.EnergyMeasurementUpdateWithWhereUniqueWithoutExperienceInput> = z.object({
  where: z.lazy(() => EnergyMeasurementWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergyMeasurementUpdateWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementUncheckedUpdateWithoutExperienceInputSchema) ]),
}).strict();

export default EnergyMeasurementUpdateWithWhereUniqueWithoutExperienceInputSchema;
