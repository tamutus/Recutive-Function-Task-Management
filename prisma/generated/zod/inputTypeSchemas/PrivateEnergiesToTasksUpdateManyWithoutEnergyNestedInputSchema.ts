import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToTasksCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToTasksCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from './PrivateEnergiesToTasksWhereUniqueInputSchema';
import { PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksScalarWhereInputSchema } from './PrivateEnergiesToTasksScalarWhereInputSchema';

export const PrivateEnergiesToTasksUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTasksCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToTasksScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTasksUpdateManyWithoutEnergyNestedInputSchema;
