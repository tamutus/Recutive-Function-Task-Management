import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesCreateWithoutTaggerInputSchema } from './TagsToTaskTemplatesCreateWithoutTaggerInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema';
import { TagsToTaskTemplatesCreateOrConnectWithoutTaggerInputSchema } from './TagsToTaskTemplatesCreateOrConnectWithoutTaggerInputSchema';
import { TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaggerInputSchema } from './TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaggerInputSchema';
import { TagsToTaskTemplatesCreateManyTaggerInputEnvelopeSchema } from './TagsToTaskTemplatesCreateManyTaggerInputEnvelopeSchema';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaggerInputSchema } from './TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaggerInputSchema';
import { TagsToTaskTemplatesUpdateManyWithWhereWithoutTaggerInputSchema } from './TagsToTaskTemplatesUpdateManyWithWhereWithoutTaggerInputSchema';
import { TagsToTaskTemplatesScalarWhereInputSchema } from './TagsToTaskTemplatesScalarWhereInputSchema';

export const TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerNestedInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesCreateWithoutTaggerInputSchema).array(),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTaggerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsToTaskTemplatesCreateManyTaggerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaggerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateManyWithWhereWithoutTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesUpdateManyWithWhereWithoutTaggerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagsToTaskTemplatesUncheckedUpdateManyWithoutTaggerNestedInputSchema;
