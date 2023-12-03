import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesCreateWithoutTaskInputSchema } from './TagsToTaskTemplatesCreateWithoutTaskInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { TagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './TagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema } from './TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema';
import { TagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './TagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema } from './TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema';
import { TagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema } from './TagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema';
import { TagsToTaskTemplatesScalarWhereInputSchema } from './TagsToTaskTemplatesScalarWhereInputSchema';

export const TagsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagsToTaskTemplatesUpdateManyWithoutTaskNestedInputSchema;
