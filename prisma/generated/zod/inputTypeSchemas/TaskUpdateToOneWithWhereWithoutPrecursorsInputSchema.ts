import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { TaskUpdateWithoutPrecursorsInputSchema } from './TaskUpdateWithoutPrecursorsInputSchema';
import { TaskUncheckedUpdateWithoutPrecursorsInputSchema } from './TaskUncheckedUpdateWithoutPrecursorsInputSchema';

export const TaskUpdateToOneWithWhereWithoutPrecursorsInputSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutPrecursorsInput> = z.object({
  where: z.lazy(() => TaskWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskUpdateWithoutPrecursorsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrecursorsInputSchema) ]),
}).strict();

export default TaskUpdateToOneWithWhereWithoutPrecursorsInputSchema;
