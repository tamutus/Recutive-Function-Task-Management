import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { TaskUpdateWithoutWorkInputSchema } from './TaskUpdateWithoutWorkInputSchema';
import { TaskUncheckedUpdateWithoutWorkInputSchema } from './TaskUncheckedUpdateWithoutWorkInputSchema';

export const TaskUpdateToOneWithWhereWithoutWorkInputSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutWorkInput> = z.object({
  where: z.lazy(() => TaskWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskUpdateWithoutWorkInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutWorkInputSchema) ]),
}).strict();

export default TaskUpdateToOneWithWhereWithoutWorkInputSchema;
