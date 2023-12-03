import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateWithoutTagsInputSchema } from './TaskUpdateWithoutTagsInputSchema';
import { TaskUncheckedUpdateWithoutTagsInputSchema } from './TaskUncheckedUpdateWithoutTagsInputSchema';
import { TaskCreateWithoutTagsInputSchema } from './TaskCreateWithoutTagsInputSchema';
import { TaskUncheckedCreateWithoutTagsInputSchema } from './TaskUncheckedCreateWithoutTagsInputSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TaskUpsertWithoutTagsInputSchema: z.ZodType<Prisma.TaskUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => TaskUpdateWithoutTagsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutTagsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export default TaskUpsertWithoutTagsInputSchema;
