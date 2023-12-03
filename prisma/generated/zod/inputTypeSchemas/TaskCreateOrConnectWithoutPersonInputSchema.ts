import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutPersonInputSchema } from './TaskCreateWithoutPersonInputSchema';
import { TaskUncheckedCreateWithoutPersonInputSchema } from './TaskUncheckedCreateWithoutPersonInputSchema';

export const TaskCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutPersonInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutPersonInputSchema;
