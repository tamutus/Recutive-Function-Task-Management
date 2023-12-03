import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksCreateWithoutTagInputSchema } from './TagsToTasksCreateWithoutTagInputSchema';
import { TagsToTasksUncheckedCreateWithoutTagInputSchema } from './TagsToTasksUncheckedCreateWithoutTagInputSchema';
import { TagsToTasksCreateOrConnectWithoutTagInputSchema } from './TagsToTasksCreateOrConnectWithoutTagInputSchema';
import { TagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema } from './TagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema';
import { TagsToTasksCreateManyTagInputEnvelopeSchema } from './TagsToTasksCreateManyTagInputEnvelopeSchema';
import { TagsToTasksWhereUniqueInputSchema } from './TagsToTasksWhereUniqueInputSchema';
import { TagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema } from './TagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema';
import { TagsToTasksUpdateManyWithWhereWithoutTagInputSchema } from './TagsToTasksUpdateManyWithWhereWithoutTagInputSchema';
import { TagsToTasksScalarWhereInputSchema } from './TagsToTasksScalarWhereInputSchema';

export const TagsToTasksUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.TagsToTasksUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsToTasksCreateWithoutTagInputSchema),z.lazy(() => TagsToTasksCreateWithoutTagInputSchema).array(),z.lazy(() => TagsToTasksUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsToTasksUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsToTasksCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsToTasksCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsToTasksCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsToTasksWhereUniqueInputSchema),z.lazy(() => TagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsToTasksWhereUniqueInputSchema),z.lazy(() => TagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsToTasksWhereUniqueInputSchema),z.lazy(() => TagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsToTasksWhereUniqueInputSchema),z.lazy(() => TagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsToTasksUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => TagsToTasksUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsToTasksScalarWhereInputSchema),z.lazy(() => TagsToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagsToTasksUncheckedUpdateManyWithoutTagNestedInputSchema;
