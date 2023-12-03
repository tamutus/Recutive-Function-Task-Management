import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementCreateWithoutExperienceInputSchema } from './EnergyMeasurementCreateWithoutExperienceInputSchema';
import { EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema } from './EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema';
import { EnergyMeasurementCreateOrConnectWithoutExperienceInputSchema } from './EnergyMeasurementCreateOrConnectWithoutExperienceInputSchema';
import { EnergyMeasurementUpsertWithWhereUniqueWithoutExperienceInputSchema } from './EnergyMeasurementUpsertWithWhereUniqueWithoutExperienceInputSchema';
import { EnergyMeasurementCreateManyExperienceInputEnvelopeSchema } from './EnergyMeasurementCreateManyExperienceInputEnvelopeSchema';
import { EnergyMeasurementWhereUniqueInputSchema } from './EnergyMeasurementWhereUniqueInputSchema';
import { EnergyMeasurementUpdateWithWhereUniqueWithoutExperienceInputSchema } from './EnergyMeasurementUpdateWithWhereUniqueWithoutExperienceInputSchema';
import { EnergyMeasurementUpdateManyWithWhereWithoutExperienceInputSchema } from './EnergyMeasurementUpdateManyWithWhereWithoutExperienceInputSchema';
import { EnergyMeasurementScalarWhereInputSchema } from './EnergyMeasurementScalarWhereInputSchema';

export const EnergyMeasurementUncheckedUpdateManyWithoutExperienceNestedInputSchema: z.ZodType<Prisma.EnergyMeasurementUncheckedUpdateManyWithoutExperienceNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergyMeasurementCreateWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementCreateWithoutExperienceInputSchema).array(),z.lazy(() => EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementUncheckedCreateWithoutExperienceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergyMeasurementCreateOrConnectWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementCreateOrConnectWithoutExperienceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergyMeasurementUpsertWithWhereUniqueWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementUpsertWithWhereUniqueWithoutExperienceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergyMeasurementCreateManyExperienceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergyMeasurementWhereUniqueInputSchema),z.lazy(() => EnergyMeasurementWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergyMeasurementWhereUniqueInputSchema),z.lazy(() => EnergyMeasurementWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergyMeasurementWhereUniqueInputSchema),z.lazy(() => EnergyMeasurementWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergyMeasurementWhereUniqueInputSchema),z.lazy(() => EnergyMeasurementWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergyMeasurementUpdateWithWhereUniqueWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementUpdateWithWhereUniqueWithoutExperienceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergyMeasurementUpdateManyWithWhereWithoutExperienceInputSchema),z.lazy(() => EnergyMeasurementUpdateManyWithWhereWithoutExperienceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergyMeasurementScalarWhereInputSchema),z.lazy(() => EnergyMeasurementScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergyMeasurementUncheckedUpdateManyWithoutExperienceNestedInputSchema;
