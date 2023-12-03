import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutPrecursorsInputSchema } from './TaskCreateWithoutPrecursorsInputSchema';
import { TaskUncheckedCreateWithoutPrecursorsInputSchema } from './TaskUncheckedCreateWithoutPrecursorsInputSchema';
import { TaskCreateOrConnectWithoutPrecursorsInputSchema } from './TaskCreateOrConnectWithoutPrecursorsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedOneWithoutPrecursorsInputSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutPrecursorsInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutPrecursorsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrecursorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutPrecursorsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional()
}).strict();

export default TaskCreateNestedOneWithoutPrecursorsInputSchema;
