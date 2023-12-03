import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkWhereUniqueInputSchema } from './TaskWorkWhereUniqueInputSchema';
import { TaskWorkUpdateWithoutTaskInputSchema } from './TaskWorkUpdateWithoutTaskInputSchema';
import { TaskWorkUncheckedUpdateWithoutTaskInputSchema } from './TaskWorkUncheckedUpdateWithoutTaskInputSchema';
import { TaskWorkCreateWithoutTaskInputSchema } from './TaskWorkCreateWithoutTaskInputSchema';
import { TaskWorkUncheckedCreateWithoutTaskInputSchema } from './TaskWorkUncheckedCreateWithoutTaskInputSchema';

export const TaskWorkUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.TaskWorkUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => TaskWorkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskWorkUpdateWithoutTaskInputSchema),z.lazy(() => TaskWorkUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => TaskWorkCreateWithoutTaskInputSchema),z.lazy(() => TaskWorkUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default TaskWorkUpsertWithWhereUniqueWithoutTaskInputSchema;
