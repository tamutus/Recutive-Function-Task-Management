import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutPrivateTagsInputSchema } from './TaskCreateWithoutPrivateTagsInputSchema';
import { TaskUncheckedCreateWithoutPrivateTagsInputSchema } from './TaskUncheckedCreateWithoutPrivateTagsInputSchema';

export const TaskCreateOrConnectWithoutPrivateTagsInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutPrivateTagsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutPrivateTagsInputSchema;
