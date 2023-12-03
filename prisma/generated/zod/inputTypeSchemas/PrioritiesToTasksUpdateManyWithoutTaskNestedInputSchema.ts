import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksCreateWithoutTaskInputSchema } from './PrioritiesToTasksCreateWithoutTaskInputSchema';
import { PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema } from './PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema';
import { PrioritiesToTasksCreateOrConnectWithoutTaskInputSchema } from './PrioritiesToTasksCreateOrConnectWithoutTaskInputSchema';
import { PrioritiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema } from './PrioritiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema';
import { PrioritiesToTasksCreateManyTaskInputEnvelopeSchema } from './PrioritiesToTasksCreateManyTaskInputEnvelopeSchema';
import { PrioritiesToTasksWhereUniqueInputSchema } from './PrioritiesToTasksWhereUniqueInputSchema';
import { PrioritiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema } from './PrioritiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema';
import { PrioritiesToTasksUpdateManyWithWhereWithoutTaskInputSchema } from './PrioritiesToTasksUpdateManyWithWhereWithoutTaskInputSchema';
import { PrioritiesToTasksScalarWhereInputSchema } from './PrioritiesToTasksScalarWhereInputSchema';

export const PrioritiesToTasksUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.PrioritiesToTasksUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToTasksUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToTasksScalarWhereInputSchema),z.lazy(() => PrioritiesToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToTasksUpdateManyWithoutTaskNestedInputSchema;
