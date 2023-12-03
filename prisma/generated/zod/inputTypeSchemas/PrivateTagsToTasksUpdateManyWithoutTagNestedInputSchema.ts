import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksCreateWithoutTagInputSchema } from './PrivateTagsToTasksCreateWithoutTagInputSchema';
import { PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema';
import { PrivateTagsToTasksCreateOrConnectWithoutTagInputSchema } from './PrivateTagsToTasksCreateOrConnectWithoutTagInputSchema';
import { PrivateTagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema } from './PrivateTagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema';
import { PrivateTagsToTasksCreateManyTagInputEnvelopeSchema } from './PrivateTagsToTasksCreateManyTagInputEnvelopeSchema';
import { PrivateTagsToTasksWhereUniqueInputSchema } from './PrivateTagsToTasksWhereUniqueInputSchema';
import { PrivateTagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema } from './PrivateTagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema';
import { PrivateTagsToTasksUpdateManyWithWhereWithoutTagInputSchema } from './PrivateTagsToTasksUpdateManyWithWhereWithoutTagInputSchema';
import { PrivateTagsToTasksScalarWhereInputSchema } from './PrivateTagsToTasksScalarWhereInputSchema';

export const PrivateTagsToTasksUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToTasksCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksCreateWithoutTagInputSchema).array(),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToTasksCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateTagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToTasksCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateTagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateTagsToTasksUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateTagsToTasksScalarWhereInputSchema),z.lazy(() => PrivateTagsToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToTasksUpdateManyWithoutTagNestedInputSchema;
