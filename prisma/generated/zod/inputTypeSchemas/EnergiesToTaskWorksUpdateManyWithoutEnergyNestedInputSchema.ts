import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksCreateWithoutEnergyInputSchema } from './EnergiesToTaskWorksCreateWithoutEnergyInputSchema';
import { EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema } from './EnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToTaskWorksWhereUniqueInputSchema } from './EnergiesToTaskWorksWhereUniqueInputSchema';
import { EnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema } from './EnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema';
import { EnergiesToTaskWorksScalarWhereInputSchema } from './EnergiesToTaskWorksScalarWhereInputSchema';

export const EnergiesToTaskWorksUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTaskWorksCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToTaskWorksScalarWhereInputSchema),z.lazy(() => EnergiesToTaskWorksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTaskWorksUpdateManyWithoutEnergyNestedInputSchema;
