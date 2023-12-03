import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from './PrivateEnergiesToTaskWorksWhereUniqueInputSchema';
import { PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksScalarWhereInputSchema } from './PrivateEnergiesToTaskWorksScalarWhereInputSchema';

export const PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyNestedInputSchema;
