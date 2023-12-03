import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkCreateWithoutTaskInputSchema } from './TaskWorkCreateWithoutTaskInputSchema';
import { TaskWorkUncheckedCreateWithoutTaskInputSchema } from './TaskWorkUncheckedCreateWithoutTaskInputSchema';
import { TaskWorkCreateOrConnectWithoutTaskInputSchema } from './TaskWorkCreateOrConnectWithoutTaskInputSchema';
import { TaskWorkCreateManyTaskInputEnvelopeSchema } from './TaskWorkCreateManyTaskInputEnvelopeSchema';
import { TaskWorkWhereUniqueInputSchema } from './TaskWorkWhereUniqueInputSchema';

export const TaskWorkUncheckedCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.TaskWorkUncheckedCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutTaskInputSchema),z.lazy(() => TaskWorkCreateWithoutTaskInputSchema).array(),z.lazy(() => TaskWorkUncheckedCreateWithoutTaskInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskWorkCreateOrConnectWithoutTaskInputSchema),z.lazy(() => TaskWorkCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskWorkCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWorkWhereUniqueInputSchema),z.lazy(() => TaskWorkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TaskWorkUncheckedCreateNestedManyWithoutTaskInputSchema;
