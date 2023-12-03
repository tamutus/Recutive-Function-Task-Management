import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutProjectsInputSchema } from './TaskCreateWithoutProjectsInputSchema';
import { TaskUncheckedCreateWithoutProjectsInputSchema } from './TaskUncheckedCreateWithoutProjectsInputSchema';
import { TaskCreateOrConnectWithoutProjectsInputSchema } from './TaskCreateOrConnectWithoutProjectsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutProjectsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional()
}).strict();

export default TaskCreateNestedOneWithoutProjectsInputSchema;
