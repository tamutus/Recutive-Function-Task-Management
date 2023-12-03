import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkWhereUniqueInputSchema } from './TaskWorkWhereUniqueInputSchema';
import { TaskWorkCreateWithoutTaskInputSchema } from './TaskWorkCreateWithoutTaskInputSchema';
import { TaskWorkUncheckedCreateWithoutTaskInputSchema } from './TaskWorkUncheckedCreateWithoutTaskInputSchema';

export const TaskWorkCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.TaskWorkCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => TaskWorkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutTaskInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default TaskWorkCreateOrConnectWithoutTaskInputSchema;
