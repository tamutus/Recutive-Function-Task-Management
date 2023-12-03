import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksCreateWithoutTaskInputSchema } from './PrivateTagsToTasksCreateWithoutTaskInputSchema';
import { PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema } from './PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema';
import { PrivateTagsToTasksCreateOrConnectWithoutTaskInputSchema } from './PrivateTagsToTasksCreateOrConnectWithoutTaskInputSchema';
import { PrivateTagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema } from './PrivateTagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema';
import { PrivateTagsToTasksCreateManyTaskInputEnvelopeSchema } from './PrivateTagsToTasksCreateManyTaskInputEnvelopeSchema';
import { PrivateTagsToTasksWhereUniqueInputSchema } from './PrivateTagsToTasksWhereUniqueInputSchema';
import { PrivateTagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema } from './PrivateTagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema';
import { PrivateTagsToTasksUpdateManyWithWhereWithoutTaskInputSchema } from './PrivateTagsToTasksUpdateManyWithWhereWithoutTaskInputSchema';
import { PrivateTagsToTasksScalarWhereInputSchema } from './PrivateTagsToTasksScalarWhereInputSchema';

export const PrivateTagsToTasksUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateTagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateTagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateTagsToTasksUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateTagsToTasksScalarWhereInputSchema),z.lazy(() => PrivateTagsToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToTasksUpdateManyWithoutTaskNestedInputSchema;
