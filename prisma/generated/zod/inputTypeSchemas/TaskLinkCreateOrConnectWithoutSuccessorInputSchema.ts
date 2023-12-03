import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkWhereUniqueInputSchema } from './TaskLinkWhereUniqueInputSchema';
import { TaskLinkCreateWithoutSuccessorInputSchema } from './TaskLinkCreateWithoutSuccessorInputSchema';
import { TaskLinkUncheckedCreateWithoutSuccessorInputSchema } from './TaskLinkUncheckedCreateWithoutSuccessorInputSchema';

export const TaskLinkCreateOrConnectWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskLinkCreateOrConnectWithoutSuccessorInput> = z.object({
  where: z.lazy(() => TaskLinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskLinkCreateWithoutSuccessorInputSchema),z.lazy(() => TaskLinkUncheckedCreateWithoutSuccessorInputSchema) ]),
}).strict();

export default TaskLinkCreateOrConnectWithoutSuccessorInputSchema;
