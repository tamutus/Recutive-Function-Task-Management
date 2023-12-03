import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsCreateWithoutProjectInputSchema } from './PersonsToProjectsCreateWithoutProjectInputSchema';
import { PersonsToProjectsUncheckedCreateWithoutProjectInputSchema } from './PersonsToProjectsUncheckedCreateWithoutProjectInputSchema';
import { PersonsToProjectsCreateOrConnectWithoutProjectInputSchema } from './PersonsToProjectsCreateOrConnectWithoutProjectInputSchema';
import { PersonsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema } from './PersonsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema';
import { PersonsToProjectsCreateManyProjectInputEnvelopeSchema } from './PersonsToProjectsCreateManyProjectInputEnvelopeSchema';
import { PersonsToProjectsWhereUniqueInputSchema } from './PersonsToProjectsWhereUniqueInputSchema';
import { PersonsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema } from './PersonsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema';
import { PersonsToProjectsUpdateManyWithWhereWithoutProjectInputSchema } from './PersonsToProjectsUpdateManyWithWhereWithoutProjectInputSchema';
import { PersonsToProjectsScalarWhereInputSchema } from './PersonsToProjectsScalarWhereInputSchema';

export const PersonsToProjectsUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PersonsToProjectsUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsCreateWithoutProjectInputSchema).array(),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToProjectsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToProjectsCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),z.lazy(() => PersonsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),z.lazy(() => PersonsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),z.lazy(() => PersonsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),z.lazy(() => PersonsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToProjectsUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToProjectsScalarWhereInputSchema),z.lazy(() => PersonsToProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToProjectsUpdateManyWithoutProjectNestedInputSchema;
