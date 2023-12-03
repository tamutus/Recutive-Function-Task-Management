import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateWithoutProjectsInputSchema } from './TaskUpdateWithoutProjectsInputSchema';
import { TaskUncheckedUpdateWithoutProjectsInputSchema } from './TaskUncheckedUpdateWithoutProjectsInputSchema';
import { TaskCreateWithoutProjectsInputSchema } from './TaskCreateWithoutProjectsInputSchema';
import { TaskUncheckedCreateWithoutProjectsInputSchema } from './TaskUncheckedCreateWithoutProjectsInputSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TaskUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.TaskUpsertWithoutProjectsInput> = z.object({
  update: z.union([ z.lazy(() => TaskUpdateWithoutProjectsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutProjectsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutProjectsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutProjectsInputSchema) ]),
  where: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export default TaskUpsertWithoutProjectsInputSchema;
