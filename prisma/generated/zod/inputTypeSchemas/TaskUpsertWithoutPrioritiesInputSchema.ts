import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateWithoutPrioritiesInputSchema } from './TaskUpdateWithoutPrioritiesInputSchema';
import { TaskUncheckedUpdateWithoutPrioritiesInputSchema } from './TaskUncheckedUpdateWithoutPrioritiesInputSchema';
import { TaskCreateWithoutPrioritiesInputSchema } from './TaskCreateWithoutPrioritiesInputSchema';
import { TaskUncheckedCreateWithoutPrioritiesInputSchema } from './TaskUncheckedCreateWithoutPrioritiesInputSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TaskUpsertWithoutPrioritiesInputSchema: z.ZodType<Prisma.TaskUpsertWithoutPrioritiesInput> = z.object({
  update: z.union([ z.lazy(() => TaskUpdateWithoutPrioritiesInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrioritiesInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutPrioritiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrioritiesInputSchema) ]),
  where: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export default TaskUpsertWithoutPrioritiesInputSchema;
