import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementWhereUniqueInputSchema } from './EnergyMeasurementWhereUniqueInputSchema';
import { EnergyMeasurementUpdateWithoutExperienceInputSchema } from './EnergyMeasurementUpdateWithoutExperienceInputSchema';
import { EnergyMeasurementUncheckedUpdateWithoutExperienceInputSchema } from './EnergyMeasurementUncheckedUpdateWithoutExperienceInputSchema';
import { EnergyMeasurementCreateWithoutExperienceInputSchema } from './EnergyMeasurementCreateWithoutExperienceInputSchema';
import { EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema } from './EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema';

export const EnergyMeasurementUpsertWithWhereUniqueWithoutExperienceInputSchema: z.ZodType<Prisma.EnergyMeasurementUpsertWithWhereUniqueWithoutExperienceInput> = z.object({
  where: z.lazy(() => EnergyMeasurementWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergyMeasurementUpdateWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementUncheckedUpdateWithoutExperienceInputSchema) ]),
  create: z.union([ z.lazy(() => EnergyMeasurementCreateWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema) ]),
}).strict();

export default EnergyMeasurementUpsertWithWhereUniqueWithoutExperienceInputSchema;
