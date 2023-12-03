import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesCreateOrConnectWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesCreateOrConnectWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesCreateManyPrivateTagInputEnvelopeSchema } from './PrivateTagsToProjectTemplatesCreateManyPrivateTagInputEnvelopeSchema';
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from './PrivateTagsToProjectTemplatesWhereUniqueInputSchema';
import { PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectTemplatesScalarWhereInputSchema } from './PrivateTagsToProjectTemplatesScalarWhereInputSchema';

export const PrivateTagsToProjectTemplatesUpdateManyWithoutPrivateTagNestedInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpdateManyWithoutPrivateTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesCreateWithoutPrivateTagInputSchema).array(),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateWithoutPrivateTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateOrConnectWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesCreateOrConnectWithoutPrivateTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUpsertWithWhereUniqueWithoutPrivateTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToProjectTemplatesCreateManyPrivateTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUpdateWithWhereUniqueWithoutPrivateTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutPrivateTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToProjectTemplatesUpdateManyWithoutPrivateTagNestedInputSchema;
