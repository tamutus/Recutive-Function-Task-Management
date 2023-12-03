import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesCreateManyTagInputEnvelopeSchema } from './PrivateTagsToTaskTemplatesCreateManyTagInputEnvelopeSchema';
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from './PrivateTagsToTaskTemplatesWhereUniqueInputSchema';
import { PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesScalarWhereInputSchema } from './PrivateTagsToTaskTemplatesScalarWhereInputSchema';

export const PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema).array(),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToTaskTemplatesCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTagNestedInputSchema;
