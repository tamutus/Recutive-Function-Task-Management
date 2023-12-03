import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateWithoutSuccessorsInputSchema } from './TaskUpdateWithoutSuccessorsInputSchema';
import { TaskUncheckedUpdateWithoutSuccessorsInputSchema } from './TaskUncheckedUpdateWithoutSuccessorsInputSchema';
import { TaskCreateWithoutSuccessorsInputSchema } from './TaskCreateWithoutSuccessorsInputSchema';
import { TaskUncheckedCreateWithoutSuccessorsInputSchema } from './TaskUncheckedCreateWithoutSuccessorsInputSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TaskUpsertWithoutSuccessorsInputSchema: z.ZodType<Prisma.TaskUpsertWithoutSuccessorsInput> = z.object({
  update: z.union([ z.lazy(() => TaskUpdateWithoutSuccessorsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutSuccessorsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutSuccessorsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutSuccessorsInputSchema) ]),
  where: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export default TaskUpsertWithoutSuccessorsInputSchema;
