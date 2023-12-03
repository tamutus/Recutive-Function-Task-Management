import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkScalarWhereInputSchema } from './TaskLinkScalarWhereInputSchema';
import { TaskLinkUpdateManyMutationInputSchema } from './TaskLinkUpdateManyMutationInputSchema';
import { TaskLinkUncheckedUpdateManyWithoutPrecursorInputSchema } from './TaskLinkUncheckedUpdateManyWithoutPrecursorInputSchema';

export const TaskLinkUpdateManyWithWhereWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskLinkUpdateManyWithWhereWithoutPrecursorInput> = z.object({
  where: z.lazy(() => TaskLinkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskLinkUpdateManyMutationInputSchema),z.lazy(() => TaskLinkUncheckedUpdateManyWithoutPrecursorInputSchema) ]),
}).strict();

export default TaskLinkUpdateManyWithWhereWithoutPrecursorInputSchema;
