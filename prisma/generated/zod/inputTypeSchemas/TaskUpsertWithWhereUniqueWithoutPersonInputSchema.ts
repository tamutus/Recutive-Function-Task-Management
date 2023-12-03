import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithoutPersonInputSchema } from './TaskUpdateWithoutPersonInputSchema';
import { TaskUncheckedUpdateWithoutPersonInputSchema } from './TaskUncheckedUpdateWithoutPersonInputSchema';
import { TaskCreateWithoutPersonInputSchema } from './TaskCreateWithoutPersonInputSchema';
import { TaskUncheckedCreateWithoutPersonInputSchema } from './TaskUncheckedCreateWithoutPersonInputSchema';

export const TaskUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskUpdateWithoutPersonInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutPersonInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default TaskUpsertWithWhereUniqueWithoutPersonInputSchema;
