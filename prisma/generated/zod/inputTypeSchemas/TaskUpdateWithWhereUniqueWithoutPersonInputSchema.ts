import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithoutPersonInputSchema } from './TaskUpdateWithoutPersonInputSchema';
import { TaskUncheckedUpdateWithoutPersonInputSchema } from './TaskUncheckedUpdateWithoutPersonInputSchema';

export const TaskUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateWithoutPersonInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default TaskUpdateWithWhereUniqueWithoutPersonInputSchema;
