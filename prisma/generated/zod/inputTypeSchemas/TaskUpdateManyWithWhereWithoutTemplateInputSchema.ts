import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskScalarWhereInputSchema } from './TaskScalarWhereInputSchema';
import { TaskUpdateManyMutationInputSchema } from './TaskUpdateManyMutationInputSchema';
import { TaskUncheckedUpdateManyWithoutTemplateInputSchema } from './TaskUncheckedUpdateManyWithoutTemplateInputSchema';

export const TaskUpdateManyWithWhereWithoutTemplateInputSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutTemplateInput> = z.object({
  where: z.lazy(() => TaskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateManyMutationInputSchema),z.lazy(() => TaskUncheckedUpdateManyWithoutTemplateInputSchema) ]),
}).strict();

export default TaskUpdateManyWithWhereWithoutTemplateInputSchema;
