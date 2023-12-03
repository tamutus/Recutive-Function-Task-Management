import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutPrioritiesInputSchema } from './TaskCreateWithoutPrioritiesInputSchema';
import { TaskUncheckedCreateWithoutPrioritiesInputSchema } from './TaskUncheckedCreateWithoutPrioritiesInputSchema';

export const TaskCreateOrConnectWithoutPrioritiesInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutPrioritiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrioritiesInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutPrioritiesInputSchema;
