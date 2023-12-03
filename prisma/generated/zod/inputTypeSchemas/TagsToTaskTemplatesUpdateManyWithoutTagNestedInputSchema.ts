import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesCreateWithoutTagInputSchema } from './TagsToTaskTemplatesCreateWithoutTagInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema';
import { TagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema } from './TagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema';
import { TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema } from './TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema';
import { TagsToTaskTemplatesCreateManyTagInputEnvelopeSchema } from './TagsToTaskTemplatesCreateManyTagInputEnvelopeSchema';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema } from './TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema';
import { TagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema } from './TagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema';
import { TagsToTaskTemplatesScalarWhereInputSchema } from './TagsToTaskTemplatesScalarWhereInputSchema';

export const TagsToTaskTemplatesUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesCreateWithoutTagInputSchema).array(),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsToTaskTemplatesCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagsToTaskTemplatesUpdateManyWithoutTagNestedInputSchema;
