import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { TaskUpdateWithoutSuccessorsInputSchema } from './TaskUpdateWithoutSuccessorsInputSchema';
import { TaskUncheckedUpdateWithoutSuccessorsInputSchema } from './TaskUncheckedUpdateWithoutSuccessorsInputSchema';

export const TaskUpdateToOneWithWhereWithoutSuccessorsInputSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutSuccessorsInput> = z.object({
  where: z.lazy(() => TaskWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskUpdateWithoutSuccessorsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutSuccessorsInputSchema) ]),
}).strict();

export default TaskUpdateToOneWithWhereWithoutSuccessorsInputSchema;
