import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToProjectsCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from './PrivateEnergiesToProjectsWhereUniqueInputSchema';
import { PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsScalarWhereInputSchema } from './PrivateEnergiesToProjectsScalarWhereInputSchema';

export const PrivateEnergiesToProjectsUncheckedUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUncheckedUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToProjectsCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToProjectsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToProjectsUncheckedUpdateManyWithoutEnergyNestedInputSchema;
