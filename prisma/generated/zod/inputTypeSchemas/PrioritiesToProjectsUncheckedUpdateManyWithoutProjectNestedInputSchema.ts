import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsCreateWithoutProjectInputSchema } from './PrioritiesToProjectsCreateWithoutProjectInputSchema';
import { PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema';
import { PrioritiesToProjectsCreateOrConnectWithoutProjectInputSchema } from './PrioritiesToProjectsCreateOrConnectWithoutProjectInputSchema';
import { PrioritiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema } from './PrioritiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema';
import { PrioritiesToProjectsCreateManyProjectInputEnvelopeSchema } from './PrioritiesToProjectsCreateManyProjectInputEnvelopeSchema';
import { PrioritiesToProjectsWhereUniqueInputSchema } from './PrioritiesToProjectsWhereUniqueInputSchema';
import { PrioritiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema } from './PrioritiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema';
import { PrioritiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema } from './PrioritiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema';
import { PrioritiesToProjectsScalarWhereInputSchema } from './PrioritiesToProjectsScalarWhereInputSchema';

export const PrioritiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsCreateWithoutProjectInputSchema).array(),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToProjectsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToProjectsCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToProjectsScalarWhereInputSchema),z.lazy(() => PrioritiesToProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema;
