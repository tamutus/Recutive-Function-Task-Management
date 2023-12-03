import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateWithoutPrivateTagsInputSchema } from './TaskUpdateWithoutPrivateTagsInputSchema';
import { TaskUncheckedUpdateWithoutPrivateTagsInputSchema } from './TaskUncheckedUpdateWithoutPrivateTagsInputSchema';
import { TaskCreateWithoutPrivateTagsInputSchema } from './TaskCreateWithoutPrivateTagsInputSchema';
import { TaskUncheckedCreateWithoutPrivateTagsInputSchema } from './TaskUncheckedCreateWithoutPrivateTagsInputSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TaskUpsertWithoutPrivateTagsInputSchema: z.ZodType<Prisma.TaskUpsertWithoutPrivateTagsInput> = z.object({
  update: z.union([ z.lazy(() => TaskUpdateWithoutPrivateTagsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutPrivateTagsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrivateTagsInputSchema) ]),
  where: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export default TaskUpsertWithoutPrivateTagsInputSchema;
