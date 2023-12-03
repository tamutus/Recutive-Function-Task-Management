import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksCreateWithoutTaskInputSchema } from './EnergiesToTasksCreateWithoutTaskInputSchema';
import { EnergiesToTasksUncheckedCreateWithoutTaskInputSchema } from './EnergiesToTasksUncheckedCreateWithoutTaskInputSchema';
import { EnergiesToTasksCreateOrConnectWithoutTaskInputSchema } from './EnergiesToTasksCreateOrConnectWithoutTaskInputSchema';
import { EnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema } from './EnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema';
import { EnergiesToTasksCreateManyTaskInputEnvelopeSchema } from './EnergiesToTasksCreateManyTaskInputEnvelopeSchema';
import { EnergiesToTasksWhereUniqueInputSchema } from './EnergiesToTasksWhereUniqueInputSchema';
import { EnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema } from './EnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema';
import { EnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema } from './EnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema';
import { EnergiesToTasksScalarWhereInputSchema } from './EnergiesToTasksScalarWhereInputSchema';

export const EnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.EnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),z.lazy(() => EnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),z.lazy(() => EnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),z.lazy(() => EnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),z.lazy(() => EnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToTasksScalarWhereInputSchema),z.lazy(() => EnergiesToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema;
