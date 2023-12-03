import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutSuccessorsInputSchema } from './TaskCreateWithoutSuccessorsInputSchema';
import { TaskUncheckedCreateWithoutSuccessorsInputSchema } from './TaskUncheckedCreateWithoutSuccessorsInputSchema';

export const TaskCreateOrConnectWithoutSuccessorsInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutSuccessorsInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutSuccessorsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutSuccessorsInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutSuccessorsInputSchema;
