import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutTagsInputSchema } from './TaskCreateWithoutTagsInputSchema';
import { TaskUncheckedCreateWithoutTagsInputSchema } from './TaskUncheckedCreateWithoutTagsInputSchema';

export const TaskCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutTagsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutTagsInputSchema;
