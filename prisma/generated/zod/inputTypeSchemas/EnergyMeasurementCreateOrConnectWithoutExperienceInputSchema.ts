import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementWhereUniqueInputSchema } from './EnergyMeasurementWhereUniqueInputSchema';
import { EnergyMeasurementCreateWithoutExperienceInputSchema } from './EnergyMeasurementCreateWithoutExperienceInputSchema';
import { EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema } from './EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema';

export const EnergyMeasurementCreateOrConnectWithoutExperienceInputSchema: z.ZodType<Prisma.EnergyMeasurementCreateOrConnectWithoutExperienceInput> = z.object({
  where: z.lazy(() => EnergyMeasurementWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergyMeasurementCreateWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema) ]),
}).strict();

export default EnergyMeasurementCreateOrConnectWithoutExperienceInputSchema;
