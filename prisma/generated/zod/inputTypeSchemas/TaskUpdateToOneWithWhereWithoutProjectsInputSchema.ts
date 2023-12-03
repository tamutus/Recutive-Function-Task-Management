import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { TaskUpdateWithoutProjectsInputSchema } from './TaskUpdateWithoutProjectsInputSchema';
import { TaskUncheckedUpdateWithoutProjectsInputSchema } from './TaskUncheckedUpdateWithoutProjectsInputSchema';

export const TaskUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutProjectsInput> = z.object({
  where: z.lazy(() => TaskWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskUpdateWithoutProjectsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutProjectsInputSchema) ]),
}).strict();

export default TaskUpdateToOneWithWhereWithoutProjectsInputSchema;
