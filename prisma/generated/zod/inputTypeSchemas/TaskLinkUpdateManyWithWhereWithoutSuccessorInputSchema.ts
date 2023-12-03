import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkScalarWhereInputSchema } from './TaskLinkScalarWhereInputSchema';
import { TaskLinkUpdateManyMutationInputSchema } from './TaskLinkUpdateManyMutationInputSchema';
import { TaskLinkUncheckedUpdateManyWithoutSuccessorInputSchema } from './TaskLinkUncheckedUpdateManyWithoutSuccessorInputSchema';

export const TaskLinkUpdateManyWithWhereWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskLinkUpdateManyWithWhereWithoutSuccessorInput> = z.object({
  where: z.lazy(() => TaskLinkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskLinkUpdateManyMutationInputSchema),z.lazy(() => TaskLinkUncheckedUpdateManyWithoutSuccessorInputSchema) ]),
}).strict();

export default TaskLinkUpdateManyWithWhereWithoutSuccessorInputSchema;
