import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsCreateOrConnectWithoutProjectInputSchema } from './PrivateEnergiesToProjectsCreateOrConnectWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsCreateManyProjectInputEnvelopeSchema } from './PrivateEnergiesToProjectsCreateManyProjectInputEnvelopeSchema';
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from './PrivateEnergiesToProjectsWhereUniqueInputSchema';
import { PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsScalarWhereInputSchema } from './PrivateEnergiesToProjectsScalarWhereInputSchema';

export const PrivateEnergiesToProjectsUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsCreateWithoutProjectInputSchema).array(),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToProjectsCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToProjectsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToProjectsUpdateManyWithoutProjectNestedInputSchema;
