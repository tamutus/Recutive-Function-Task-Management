import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutPrecursorsInputSchema } from './TaskCreateWithoutPrecursorsInputSchema';
import { TaskUncheckedCreateWithoutPrecursorsInputSchema } from './TaskUncheckedCreateWithoutPrecursorsInputSchema';

export const TaskCreateOrConnectWithoutPrecursorsInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutPrecursorsInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutPrecursorsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrecursorsInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutPrecursorsInputSchema;
