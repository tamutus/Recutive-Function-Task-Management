import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { TaskUpdateWithoutPrivateTagsInputSchema } from './TaskUpdateWithoutPrivateTagsInputSchema';
import { TaskUncheckedUpdateWithoutPrivateTagsInputSchema } from './TaskUncheckedUpdateWithoutPrivateTagsInputSchema';

export const TaskUpdateToOneWithWhereWithoutPrivateTagsInputSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => TaskWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskUpdateWithoutPrivateTagsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default TaskUpdateToOneWithWhereWithoutPrivateTagsInputSchema;
