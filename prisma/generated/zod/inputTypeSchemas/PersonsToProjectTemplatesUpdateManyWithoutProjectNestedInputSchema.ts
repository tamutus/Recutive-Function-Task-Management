import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesCreateWithoutProjectInputSchema } from './PersonsToProjectTemplatesCreateWithoutProjectInputSchema';
import { PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';
import { PersonsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema } from './PersonsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema';
import { PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema } from './PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema';
import { PersonsToProjectTemplatesCreateManyProjectInputEnvelopeSchema } from './PersonsToProjectTemplatesCreateManyProjectInputEnvelopeSchema';
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from './PersonsToProjectTemplatesWhereUniqueInputSchema';
import { PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema } from './PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema';
import { PersonsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema } from './PersonsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema';
import { PersonsToProjectTemplatesScalarWhereInputSchema } from './PersonsToProjectTemplatesScalarWhereInputSchema';

export const PersonsToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesCreateWithoutProjectInputSchema).array(),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToProjectTemplatesCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PersonsToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema;
