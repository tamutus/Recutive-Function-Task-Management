import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkWhereUniqueInputSchema } from './TaskWorkWhereUniqueInputSchema';
import { TaskWorkUpdateWithoutTaskInputSchema } from './TaskWorkUpdateWithoutTaskInputSchema';
import { TaskWorkUncheckedUpdateWithoutTaskInputSchema } from './TaskWorkUncheckedUpdateWithoutTaskInputSchema';

export const TaskWorkUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.TaskWorkUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => TaskWorkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskWorkUpdateWithoutTaskInputSchema),z.lazy(() => TaskWorkUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default TaskWorkUpdateWithWhereUniqueWithoutTaskInputSchema;
