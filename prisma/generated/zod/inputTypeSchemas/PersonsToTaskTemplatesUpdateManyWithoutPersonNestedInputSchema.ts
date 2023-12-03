import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesCreateWithoutPersonInputSchema } from './PersonsToTaskTemplatesCreateWithoutPersonInputSchema';
import { PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema } from './PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema';
import { PersonsToTaskTemplatesCreateOrConnectWithoutPersonInputSchema } from './PersonsToTaskTemplatesCreateOrConnectWithoutPersonInputSchema';
import { PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema } from './PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema';
import { PersonsToTaskTemplatesCreateManyPersonInputEnvelopeSchema } from './PersonsToTaskTemplatesCreateManyPersonInputEnvelopeSchema';
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from './PersonsToTaskTemplatesWhereUniqueInputSchema';
import { PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema } from './PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema';
import { PersonsToTaskTemplatesUpdateManyWithWhereWithoutPersonInputSchema } from './PersonsToTaskTemplatesUpdateManyWithWhereWithoutPersonInputSchema';
import { PersonsToTaskTemplatesScalarWhereInputSchema } from './PersonsToTaskTemplatesScalarWhereInputSchema';

export const PersonsToTaskTemplatesUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesCreateWithoutPersonInputSchema).array(),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToTaskTemplatesCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToTaskTemplatesUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PersonsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToTaskTemplatesUpdateManyWithoutPersonNestedInputSchema;
