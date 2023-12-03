import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsCreateWithoutPersonInputSchema } from './PersonsToProjectsCreateWithoutPersonInputSchema';
import { PersonsToProjectsUncheckedCreateWithoutPersonInputSchema } from './PersonsToProjectsUncheckedCreateWithoutPersonInputSchema';
import { PersonsToProjectsCreateOrConnectWithoutPersonInputSchema } from './PersonsToProjectsCreateOrConnectWithoutPersonInputSchema';
import { PersonsToProjectsUpsertWithWhereUniqueWithoutPersonInputSchema } from './PersonsToProjectsUpsertWithWhereUniqueWithoutPersonInputSchema';
import { PersonsToProjectsCreateManyPersonInputEnvelopeSchema } from './PersonsToProjectsCreateManyPersonInputEnvelopeSchema';
import { PersonsToProjectsWhereUniqueInputSchema } from './PersonsToProjectsWhereUniqueInputSchema';
import { PersonsToProjectsUpdateWithWhereUniqueWithoutPersonInputSchema } from './PersonsToProjectsUpdateWithWhereUniqueWithoutPersonInputSchema';
import { PersonsToProjectsUpdateManyWithWhereWithoutPersonInputSchema } from './PersonsToProjectsUpdateManyWithWhereWithoutPersonInputSchema';
import { PersonsToProjectsScalarWhereInputSchema } from './PersonsToProjectsScalarWhereInputSchema';

export const PersonsToProjectsUncheckedUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.PersonsToProjectsUncheckedUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToProjectsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsCreateWithoutPersonInputSchema).array(),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToProjectsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToProjectsUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToProjectsCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),z.lazy(() => PersonsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),z.lazy(() => PersonsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),z.lazy(() => PersonsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),z.lazy(() => PersonsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToProjectsUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToProjectsUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToProjectsScalarWhereInputSchema),z.lazy(() => PersonsToProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToProjectsUncheckedUpdateManyWithoutPersonNestedInputSchema;
