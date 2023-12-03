import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { TaskUpdateWithoutTagsInputSchema } from './TaskUpdateWithoutTagsInputSchema';
import { TaskUncheckedUpdateWithoutTagsInputSchema } from './TaskUncheckedUpdateWithoutTagsInputSchema';

export const TaskUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => TaskWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskUpdateWithoutTagsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default TaskUpdateToOneWithWhereWithoutTagsInputSchema;
