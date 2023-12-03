import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkCreateWithoutSuccessorInputSchema } from './TaskLinkCreateWithoutSuccessorInputSchema';
import { TaskLinkUncheckedCreateWithoutSuccessorInputSchema } from './TaskLinkUncheckedCreateWithoutSuccessorInputSchema';
import { TaskLinkCreateOrConnectWithoutSuccessorInputSchema } from './TaskLinkCreateOrConnectWithoutSuccessorInputSchema';
import { TaskLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema } from './TaskLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema';
import { TaskLinkCreateManySuccessorInputEnvelopeSchema } from './TaskLinkCreateManySuccessorInputEnvelopeSchema';
import { TaskLinkWhereUniqueInputSchema } from './TaskLinkWhereUniqueInputSchema';
import { TaskLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema } from './TaskLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema';
import { TaskLinkUpdateManyWithWhereWithoutSuccessorInputSchema } from './TaskLinkUpdateManyWithWhereWithoutSuccessorInputSchema';
import { TaskLinkScalarWhereInputSchema } from './TaskLinkScalarWhereInputSchema';

export const TaskLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema: z.ZodType<Prisma.TaskLinkUncheckedUpdateManyWithoutSuccessorNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskLinkCreateWithoutSuccessorInputSchema),z.lazy(() => TaskLinkCreateWithoutSuccessorInputSchema).array(),z.lazy(() => TaskLinkUncheckedCreateWithoutSuccessorInputSchema),z.lazy(() => TaskLinkUncheckedCreateWithoutSuccessorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskLinkCreateOrConnectWithoutSuccessorInputSchema),z.lazy(() => TaskLinkCreateOrConnectWithoutSuccessorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema),z.lazy(() => TaskLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskLinkCreateManySuccessorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskLinkWhereUniqueInputSchema),z.lazy(() => TaskLinkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskLinkWhereUniqueInputSchema),z.lazy(() => TaskLinkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskLinkWhereUniqueInputSchema),z.lazy(() => TaskLinkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskLinkWhereUniqueInputSchema),z.lazy(() => TaskLinkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema),z.lazy(() => TaskLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskLinkUpdateManyWithWhereWithoutSuccessorInputSchema),z.lazy(() => TaskLinkUpdateManyWithWhereWithoutSuccessorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskLinkScalarWhereInputSchema),z.lazy(() => TaskLinkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TaskLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema;
