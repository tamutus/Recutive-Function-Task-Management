import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsCreateWithoutPriorityInputSchema } from './PrioritiesToProjectsCreateWithoutPriorityInputSchema';
import { PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToProjectsCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToProjectsCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToProjectsUpsertWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToProjectsUpsertWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToProjectsCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToProjectsCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToProjectsWhereUniqueInputSchema } from './PrioritiesToProjectsWhereUniqueInputSchema';
import { PrioritiesToProjectsUpdateWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToProjectsUpdateWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToProjectsUpdateManyWithWhereWithoutPriorityInputSchema } from './PrioritiesToProjectsUpdateManyWithWhereWithoutPriorityInputSchema';
import { PrioritiesToProjectsScalarWhereInputSchema } from './PrioritiesToProjectsScalarWhereInputSchema';

export const PrioritiesToProjectsUncheckedUpdateManyWithoutPriorityNestedInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUncheckedUpdateManyWithoutPriorityNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToProjectsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToProjectsCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToProjectsUpsertWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsUpsertWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToProjectsCreateManyPriorityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToProjectsUpdateWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsUpdateWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToProjectsUpdateManyWithWhereWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsUpdateManyWithWhereWithoutPriorityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToProjectsScalarWhereInputSchema),z.lazy(() => PrioritiesToProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToProjectsUncheckedUpdateManyWithoutPriorityNestedInputSchema;
