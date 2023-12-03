import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutPrivateTagsInputSchema } from './TaskCreateWithoutPrivateTagsInputSchema';
import { TaskUncheckedCreateWithoutPrivateTagsInputSchema } from './TaskUncheckedCreateWithoutPrivateTagsInputSchema';
import { TaskCreateOrConnectWithoutPrivateTagsInputSchema } from './TaskCreateOrConnectWithoutPrivateTagsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedOneWithoutPrivateTagsInputSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutPrivateTagsInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutPrivateTagsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional()
}).strict();

export default TaskCreateNestedOneWithoutPrivateTagsInputSchema;
