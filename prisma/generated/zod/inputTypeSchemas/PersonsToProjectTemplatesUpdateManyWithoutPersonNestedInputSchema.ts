import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesCreateWithoutPersonInputSchema } from './PersonsToProjectTemplatesCreateWithoutPersonInputSchema';
import { PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema } from './PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema';
import { PersonsToProjectTemplatesCreateOrConnectWithoutPersonInputSchema } from './PersonsToProjectTemplatesCreateOrConnectWithoutPersonInputSchema';
import { PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema } from './PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema';
import { PersonsToProjectTemplatesCreateManyPersonInputEnvelopeSchema } from './PersonsToProjectTemplatesCreateManyPersonInputEnvelopeSchema';
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from './PersonsToProjectTemplatesWhereUniqueInputSchema';
import { PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema } from './PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema';
import { PersonsToProjectTemplatesUpdateManyWithWhereWithoutPersonInputSchema } from './PersonsToProjectTemplatesUpdateManyWithWhereWithoutPersonInputSchema';
import { PersonsToProjectTemplatesScalarWhereInputSchema } from './PersonsToProjectTemplatesScalarWhereInputSchema';

export const PersonsToProjectTemplatesUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesCreateWithoutPersonInputSchema).array(),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToProjectTemplatesCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToProjectTemplatesUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PersonsToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToProjectTemplatesUpdateManyWithoutPersonNestedInputSchema;
