import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksCreateWithoutTaskInputSchema } from './PrivateEnergiesToTasksCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema } from './PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTasksCreateOrConnectWithoutTaskInputSchema } from './PrivateEnergiesToTasksCreateOrConnectWithoutTaskInputSchema';
import { PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema } from './PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema';
import { PrivateEnergiesToTasksCreateManyTaskInputEnvelopeSchema } from './PrivateEnergiesToTasksCreateManyTaskInputEnvelopeSchema';
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from './PrivateEnergiesToTasksWhereUniqueInputSchema';
import { PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema } from './PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema';
import { PrivateEnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema } from './PrivateEnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema';
import { PrivateEnergiesToTasksScalarWhereInputSchema } from './PrivateEnergiesToTasksScalarWhereInputSchema';

export const PrivateEnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToTasksScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema;
