import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsCreateWithoutTagInputSchema } from './PrivateTagsToProjectsCreateWithoutTagInputSchema';
import { PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema';
import { PrivateTagsToProjectsCreateOrConnectWithoutTagInputSchema } from './PrivateTagsToProjectsCreateOrConnectWithoutTagInputSchema';
import { PrivateTagsToProjectsUpsertWithWhereUniqueWithoutTagInputSchema } from './PrivateTagsToProjectsUpsertWithWhereUniqueWithoutTagInputSchema';
import { PrivateTagsToProjectsCreateManyTagInputEnvelopeSchema } from './PrivateTagsToProjectsCreateManyTagInputEnvelopeSchema';
import { PrivateTagsToProjectsWhereUniqueInputSchema } from './PrivateTagsToProjectsWhereUniqueInputSchema';
import { PrivateTagsToProjectsUpdateWithWhereUniqueWithoutTagInputSchema } from './PrivateTagsToProjectsUpdateWithWhereUniqueWithoutTagInputSchema';
import { PrivateTagsToProjectsUpdateManyWithWhereWithoutTagInputSchema } from './PrivateTagsToProjectsUpdateManyWithWhereWithoutTagInputSchema';
import { PrivateTagsToProjectsScalarWhereInputSchema } from './PrivateTagsToProjectsScalarWhereInputSchema';

export const PrivateTagsToProjectsUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToProjectsCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsCreateWithoutTagInputSchema).array(),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToProjectsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateTagsToProjectsUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToProjectsCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateTagsToProjectsUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateTagsToProjectsUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateTagsToProjectsScalarWhereInputSchema),z.lazy(() => PrivateTagsToProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToProjectsUpdateManyWithoutTagNestedInputSchema;
