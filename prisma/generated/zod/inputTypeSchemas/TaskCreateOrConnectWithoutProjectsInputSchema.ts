import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutProjectsInputSchema } from './TaskCreateWithoutProjectsInputSchema';
import { TaskUncheckedCreateWithoutProjectsInputSchema } from './TaskUncheckedCreateWithoutProjectsInputSchema';

export const TaskCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutProjectsInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutProjectsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutProjectsInputSchema;
