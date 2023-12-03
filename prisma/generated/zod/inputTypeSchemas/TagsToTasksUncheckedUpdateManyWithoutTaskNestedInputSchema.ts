import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksCreateWithoutTaskInputSchema } from './TagsToTasksCreateWithoutTaskInputSchema';
import { TagsToTasksUncheckedCreateWithoutTaskInputSchema } from './TagsToTasksUncheckedCreateWithoutTaskInputSchema';
import { TagsToTasksCreateOrConnectWithoutTaskInputSchema } from './TagsToTasksCreateOrConnectWithoutTaskInputSchema';
import { TagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema } from './TagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema';
import { TagsToTasksCreateManyTaskInputEnvelopeSchema } from './TagsToTasksCreateManyTaskInputEnvelopeSchema';
import { TagsToTasksWhereUniqueInputSchema } from './TagsToTasksWhereUniqueInputSchema';
import { TagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema } from './TagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema';
import { TagsToTasksUpdateManyWithWhereWithoutTaskInputSchema } from './TagsToTasksUpdateManyWithWhereWithoutTaskInputSchema';
import { TagsToTasksScalarWhereInputSchema } from './TagsToTasksScalarWhereInputSchema';

export const TagsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.TagsToTasksUncheckedUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsToTasksCreateWithoutTaskInputSchema),z.lazy(() => TagsToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => TagsToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => TagsToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => TagsToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => TagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsToTasksWhereUniqueInputSchema),z.lazy(() => TagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsToTasksWhereUniqueInputSchema),z.lazy(() => TagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsToTasksWhereUniqueInputSchema),z.lazy(() => TagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsToTasksWhereUniqueInputSchema),z.lazy(() => TagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => TagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsToTasksUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => TagsToTasksUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsToTasksScalarWhereInputSchema),z.lazy(() => TagsToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagsToTasksUncheckedUpdateManyWithoutTaskNestedInputSchema;
