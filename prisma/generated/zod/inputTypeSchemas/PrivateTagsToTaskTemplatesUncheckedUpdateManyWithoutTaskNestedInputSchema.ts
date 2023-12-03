import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './PrivateTagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from './PrivateTagsToTaskTemplatesWhereUniqueInputSchema';
import { PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesScalarWhereInputSchema } from './PrivateTagsToTaskTemplatesScalarWhereInputSchema';

export const PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema;
