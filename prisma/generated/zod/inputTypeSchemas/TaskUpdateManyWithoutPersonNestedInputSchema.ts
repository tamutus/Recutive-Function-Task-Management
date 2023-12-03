import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutPersonInputSchema } from './TaskCreateWithoutPersonInputSchema';
import { TaskUncheckedCreateWithoutPersonInputSchema } from './TaskUncheckedCreateWithoutPersonInputSchema';
import { TaskCreateOrConnectWithoutPersonInputSchema } from './TaskCreateOrConnectWithoutPersonInputSchema';
import { TaskUpsertWithWhereUniqueWithoutPersonInputSchema } from './TaskUpsertWithWhereUniqueWithoutPersonInputSchema';
import { TaskCreateManyPersonInputEnvelopeSchema } from './TaskCreateManyPersonInputEnvelopeSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithWhereUniqueWithoutPersonInputSchema } from './TaskUpdateWithWhereUniqueWithoutPersonInputSchema';
import { TaskUpdateManyWithWhereWithoutPersonInputSchema } from './TaskUpdateManyWithWhereWithoutPersonInputSchema';
import { TaskScalarWhereInputSchema } from './TaskScalarWhereInputSchema';

export const TaskUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.TaskUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutPersonInputSchema),z.lazy(() => TaskCreateWithoutPersonInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutPersonInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutPersonInputSchema),z.lazy(() => TaskCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TaskUpdateManyWithoutPersonNestedInputSchema;
