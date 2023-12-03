import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutTagsInputSchema } from './TaskCreateWithoutTagsInputSchema';
import { TaskUncheckedCreateWithoutTagsInputSchema } from './TaskUncheckedCreateWithoutTagsInputSchema';
import { TaskCreateOrConnectWithoutTagsInputSchema } from './TaskCreateOrConnectWithoutTagsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutTagsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional()
}).strict();

export default TaskCreateNestedOneWithoutTagsInputSchema;
