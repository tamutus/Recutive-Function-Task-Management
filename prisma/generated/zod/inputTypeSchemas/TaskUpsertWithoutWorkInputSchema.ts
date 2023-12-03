import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateWithoutWorkInputSchema } from './TaskUpdateWithoutWorkInputSchema';
import { TaskUncheckedUpdateWithoutWorkInputSchema } from './TaskUncheckedUpdateWithoutWorkInputSchema';
import { TaskCreateWithoutWorkInputSchema } from './TaskCreateWithoutWorkInputSchema';
import { TaskUncheckedCreateWithoutWorkInputSchema } from './TaskUncheckedCreateWithoutWorkInputSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TaskUpsertWithoutWorkInputSchema: z.ZodType<Prisma.TaskUpsertWithoutWorkInput> = z.object({
  update: z.union([ z.lazy(() => TaskUpdateWithoutWorkInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutWorkInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutWorkInputSchema),z.lazy(() => TaskUncheckedCreateWithoutWorkInputSchema) ]),
  where: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export default TaskUpsertWithoutWorkInputSchema;
