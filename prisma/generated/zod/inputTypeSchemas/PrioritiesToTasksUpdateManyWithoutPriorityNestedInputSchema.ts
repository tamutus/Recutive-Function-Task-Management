import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksCreateWithoutPriorityInputSchema } from './PrioritiesToTasksCreateWithoutPriorityInputSchema';
import { PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToTasksCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToTasksCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToTasksUpsertWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToTasksUpsertWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToTasksCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToTasksCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToTasksWhereUniqueInputSchema } from './PrioritiesToTasksWhereUniqueInputSchema';
import { PrioritiesToTasksUpdateWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToTasksUpdateWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToTasksUpdateManyWithWhereWithoutPriorityInputSchema } from './PrioritiesToTasksUpdateManyWithWhereWithoutPriorityInputSchema';
import { PrioritiesToTasksScalarWhereInputSchema } from './PrioritiesToTasksScalarWhereInputSchema';

export const PrioritiesToTasksUpdateManyWithoutPriorityNestedInputSchema: z.ZodType<Prisma.PrioritiesToTasksUpdateManyWithoutPriorityNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToTasksCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToTasksCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToTasksUpsertWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksUpsertWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToTasksCreateManyPriorityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToTasksUpdateWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksUpdateWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToTasksUpdateManyWithWhereWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksUpdateManyWithWhereWithoutPriorityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToTasksScalarWhereInputSchema),z.lazy(() => PrioritiesToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToTasksUpdateManyWithoutPriorityNestedInputSchema;
