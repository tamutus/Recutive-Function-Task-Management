import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesCreateManyProjectInputEnvelopeSchema } from './PrivateTagsToProjectTemplatesCreateManyProjectInputEnvelopeSchema';
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from './PrivateTagsToProjectTemplatesWhereUniqueInputSchema';
import { PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema } from './PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema';
import { PrivateTagsToProjectTemplatesScalarWhereInputSchema } from './PrivateTagsToProjectTemplatesScalarWhereInputSchema';

export const PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutProjectInputSchema).array(),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToProjectTemplatesCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutProjectNestedInputSchema;
