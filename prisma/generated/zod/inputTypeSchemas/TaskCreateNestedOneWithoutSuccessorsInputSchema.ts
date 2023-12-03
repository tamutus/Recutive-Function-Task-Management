import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutSuccessorsInputSchema } from './TaskCreateWithoutSuccessorsInputSchema';
import { TaskUncheckedCreateWithoutSuccessorsInputSchema } from './TaskUncheckedCreateWithoutSuccessorsInputSchema';
import { TaskCreateOrConnectWithoutSuccessorsInputSchema } from './TaskCreateOrConnectWithoutSuccessorsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedOneWithoutSuccessorsInputSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutSuccessorsInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutSuccessorsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutSuccessorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutSuccessorsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional()
}).strict();

export default TaskCreateNestedOneWithoutSuccessorsInputSchema;
