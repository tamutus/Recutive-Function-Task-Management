import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { TaskUpdateWithoutPrioritiesInputSchema } from './TaskUpdateWithoutPrioritiesInputSchema';
import { TaskUncheckedUpdateWithoutPrioritiesInputSchema } from './TaskUncheckedUpdateWithoutPrioritiesInputSchema';

export const TaskUpdateToOneWithWhereWithoutPrioritiesInputSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => TaskWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskUpdateWithoutPrioritiesInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrioritiesInputSchema) ]),
}).strict();

export default TaskUpdateToOneWithWhereWithoutPrioritiesInputSchema;
