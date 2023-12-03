import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutWorkInputSchema } from './TaskCreateWithoutWorkInputSchema';
import { TaskUncheckedCreateWithoutWorkInputSchema } from './TaskUncheckedCreateWithoutWorkInputSchema';

export const TaskCreateOrConnectWithoutWorkInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutWorkInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutWorkInputSchema),z.lazy(() => TaskUncheckedCreateWithoutWorkInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutWorkInputSchema;
