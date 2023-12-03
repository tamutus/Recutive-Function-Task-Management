import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutPrioritiesInputSchema } from './TaskCreateWithoutPrioritiesInputSchema';
import { TaskUncheckedCreateWithoutPrioritiesInputSchema } from './TaskUncheckedCreateWithoutPrioritiesInputSchema';
import { TaskCreateOrConnectWithoutPrioritiesInputSchema } from './TaskCreateOrConnectWithoutPrioritiesInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedOneWithoutPrioritiesInputSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutPrioritiesInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutPrioritiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional()
}).strict();

export default TaskCreateNestedOneWithoutPrioritiesInputSchema;
