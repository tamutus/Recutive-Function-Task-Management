import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskScalarWhereInputSchema } from './TaskScalarWhereInputSchema';
import { TaskUpdateManyMutationInputSchema } from './TaskUpdateManyMutationInputSchema';
import { TaskUncheckedUpdateManyWithoutPersonInputSchema } from './TaskUncheckedUpdateManyWithoutPersonInputSchema';

export const TaskUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => TaskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateManyMutationInputSchema),z.lazy(() => TaskUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default TaskUpdateManyWithWhereWithoutPersonInputSchema;
