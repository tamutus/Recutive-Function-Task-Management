import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementCreateWithoutExperienceInputSchema } from './EnergyMeasurementCreateWithoutExperienceInputSchema';
import { EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema } from './EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema';
import { EnergyMeasurementCreateOrConnectWithoutExperienceInputSchema } from './EnergyMeasurementCreateOrConnectWithoutExperienceInputSchema';
import { EnergyMeasurementCreateManyExperienceInputEnvelopeSchema } from './EnergyMeasurementCreateManyExperienceInputEnvelopeSchema';
import { EnergyMeasurementWhereUniqueInputSchema } from './EnergyMeasurementWhereUniqueInputSchema';

export const EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInputSchema: z.ZodType<Prisma.EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInput> = z.object({
  create: z.union([ z.lazy(() => EnergyMeasurementCreateWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementCreateWithoutExperienceInputSchema).array(),z.lazy(() => EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergyMeasurementCreateOrConnectWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementCreateOrConnectWithoutExperienceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergyMeasurementCreateManyExperienceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergyMeasurementWhereUniqueInputSchema),z.lazy(() => EnergyMeasurementWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergyMeasurementUncheckedCreateNestedManyWithoutExperienceInputSchema;
