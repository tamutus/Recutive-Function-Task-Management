import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsCreateWithoutProjectInputSchema } from './PrivateTagsToProjectsCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectsCreateOrConnectWithoutProjectInputSchema } from './PrivateTagsToProjectsCreateOrConnectWithoutProjectInputSchema';
import { PrivateTagsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema } from './PrivateTagsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema';
import { PrivateTagsToProjectsCreateManyProjectInputEnvelopeSchema } from './PrivateTagsToProjectsCreateManyProjectInputEnvelopeSchema';
import { PrivateTagsToProjectsWhereUniqueInputSchema } from './PrivateTagsToProjectsWhereUniqueInputSchema';
import { PrivateTagsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema } from './PrivateTagsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema';
import { PrivateTagsToProjectsUpdateManyWithWhereWithoutProjectInputSchema } from './PrivateTagsToProjectsUpdateManyWithWhereWithoutProjectInputSchema';
import { PrivateTagsToProjectsScalarWhereInputSchema } from './PrivateTagsToProjectsScalarWhereInputSchema';

export const PrivateTagsToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsCreateWithoutProjectInputSchema).array(),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToProjectsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateTagsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToProjectsCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateTagsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateTagsToProjectsUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateTagsToProjectsScalarWhereInputSchema),z.lazy(() => PrivateTagsToProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema;
