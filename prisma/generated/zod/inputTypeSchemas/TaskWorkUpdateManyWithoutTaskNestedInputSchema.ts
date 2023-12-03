import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkCreateWithoutTaskInputSchema } from './TaskWorkCreateWithoutTaskInputSchema';
import { TaskWorkUncheckedCreateWithoutTaskInputSchema } from './TaskWorkUncheckedCreateWithoutTaskInputSchema';
import { TaskWorkCreateOrConnectWithoutTaskInputSchema } from './TaskWorkCreateOrConnectWithoutTaskInputSchema';
import { TaskWorkUpsertWithWhereUniqueWithoutTaskInputSchema } from './TaskWorkUpsertWithWhereUniqueWithoutTaskInputSchema';
import { TaskWorkCreateManyTaskInputEnvelopeSchema } from './TaskWorkCreateManyTaskInputEnvelopeSchema';
import { TaskWorkWhereUniqueInputSchema } from './TaskWorkWhereUniqueInputSchema';
import { TaskWorkUpdateWithWhereUniqueWithoutTaskInputSchema } from './TaskWorkUpdateWithWhereUniqueWithoutTaskInputSchema';
import { TaskWorkUpdateManyWithWhereWithoutTaskInputSchema } from './TaskWorkUpdateManyWithWhereWithoutTaskInputSchema';
import { TaskWorkScalarWhereInputSchema } from './TaskWorkScalarWhereInputSchema';

export const TaskWorkUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.TaskWorkUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutTaskInputSchema),z.lazy(() => TaskWorkCreateWithoutTaskInputSchema).array(),z.lazy(() => TaskWorkUncheckedCreateWithoutTaskInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskWorkCreateOrConnectWithoutTaskInputSchema),z.lazy(() => TaskWorkCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskWorkUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => TaskWorkUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskWorkCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWorkWhereUniqueInputSchema),z.lazy(() => TaskWorkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWorkWhereUniqueInputSchema),z.lazy(() => TaskWorkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWorkWhereUniqueInputSchema),z.lazy(() => TaskWorkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWorkWhereUniqueInputSchema),z.lazy(() => TaskWorkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskWorkUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => TaskWorkUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskWorkUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => TaskWorkUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskWorkScalarWhereInputSchema),z.lazy(() => TaskWorkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TaskWorkUpdateManyWithoutTaskNestedInputSchema;
