import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkCreateWithoutPrecursorInputSchema } from './TaskLinkCreateWithoutPrecursorInputSchema';
import { TaskLinkUncheckedCreateWithoutPrecursorInputSchema } from './TaskLinkUncheckedCreateWithoutPrecursorInputSchema';
import { TaskLinkCreateOrConnectWithoutPrecursorInputSchema } from './TaskLinkCreateOrConnectWithoutPrecursorInputSchema';
import { TaskLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema } from './TaskLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema';
import { TaskLinkCreateManyPrecursorInputEnvelopeSchema } from './TaskLinkCreateManyPrecursorInputEnvelopeSchema';
import { TaskLinkWhereUniqueInputSchema } from './TaskLinkWhereUniqueInputSchema';
import { TaskLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema } from './TaskLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema';
import { TaskLinkUpdateManyWithWhereWithoutPrecursorInputSchema } from './TaskLinkUpdateManyWithWhereWithoutPrecursorInputSchema';
import { TaskLinkScalarWhereInputSchema } from './TaskLinkScalarWhereInputSchema';

export const TaskLinkUncheckedUpdateManyWithoutPrecursorNestedInputSchema: z.ZodType<Prisma.TaskLinkUncheckedUpdateManyWithoutPrecursorNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskLinkCreateWithoutPrecursorInputSchema),z.lazy(() => TaskLinkCreateWithoutPrecursorInputSchema).array(),z.lazy(() => TaskLinkUncheckedCreateWithoutPrecursorInputSchema),z.lazy(() => TaskLinkUncheckedCreateWithoutPrecursorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskLinkCreateOrConnectWithoutPrecursorInputSchema),z.lazy(() => TaskLinkCreateOrConnectWithoutPrecursorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema),z.lazy(() => TaskLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskLinkCreateManyPrecursorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskLinkWhereUniqueInputSchema),z.lazy(() => TaskLinkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskLinkWhereUniqueInputSchema),z.lazy(() => TaskLinkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskLinkWhereUniqueInputSchema),z.lazy(() => TaskLinkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskLinkWhereUniqueInputSchema),z.lazy(() => TaskLinkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema),z.lazy(() => TaskLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskLinkUpdateManyWithWhereWithoutPrecursorInputSchema),z.lazy(() => TaskLinkUpdateManyWithWhereWithoutPrecursorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskLinkScalarWhereInputSchema),z.lazy(() => TaskLinkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TaskLinkUncheckedUpdateManyWithoutPrecursorNestedInputSchema;
