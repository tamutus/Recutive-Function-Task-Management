import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateWithoutPrecursorsInputSchema } from './TaskUpdateWithoutPrecursorsInputSchema';
import { TaskUncheckedUpdateWithoutPrecursorsInputSchema } from './TaskUncheckedUpdateWithoutPrecursorsInputSchema';
import { TaskCreateWithoutPrecursorsInputSchema } from './TaskCreateWithoutPrecursorsInputSchema';
import { TaskUncheckedCreateWithoutPrecursorsInputSchema } from './TaskUncheckedCreateWithoutPrecursorsInputSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TaskUpsertWithoutPrecursorsInputSchema: z.ZodType<Prisma.TaskUpsertWithoutPrecursorsInput> = z.object({
  update: z.union([ z.lazy(() => TaskUpdateWithoutPrecursorsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrecursorsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutPrecursorsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrecursorsInputSchema) ]),
  where: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export default TaskUpsertWithoutPrecursorsInputSchema;
