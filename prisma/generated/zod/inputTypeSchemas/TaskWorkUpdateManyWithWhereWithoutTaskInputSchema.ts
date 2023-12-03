import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkScalarWhereInputSchema } from './TaskWorkScalarWhereInputSchema';
import { TaskWorkUpdateManyMutationInputSchema } from './TaskWorkUpdateManyMutationInputSchema';
import { TaskWorkUncheckedUpdateManyWithoutTaskInputSchema } from './TaskWorkUncheckedUpdateManyWithoutTaskInputSchema';

export const TaskWorkUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.TaskWorkUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => TaskWorkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskWorkUpdateManyMutationInputSchema),z.lazy(() => TaskWorkUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default TaskWorkUpdateManyWithWhereWithoutTaskInputSchema;
