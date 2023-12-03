import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutWorkInputSchema } from './TaskCreateWithoutWorkInputSchema';
import { TaskUncheckedCreateWithoutWorkInputSchema } from './TaskUncheckedCreateWithoutWorkInputSchema';
import { TaskCreateOrConnectWithoutWorkInputSchema } from './TaskCreateOrConnectWithoutWorkInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedOneWithoutWorkInputSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutWorkInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutWorkInputSchema),z.lazy(() => TaskUncheckedCreateWithoutWorkInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutWorkInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional()
}).strict();

export default TaskCreateNestedOneWithoutWorkInputSchema;
