import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { TaskUpdateWithoutEnergiesInputSchema } from './TaskUpdateWithoutEnergiesInputSchema';
import { TaskUncheckedUpdateWithoutEnergiesInputSchema } from './TaskUncheckedUpdateWithoutEnergiesInputSchema';

export const TaskUpdateToOneWithWhereWithoutEnergiesInputSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutEnergiesInput> = z.object({
  where: z.lazy(() => TaskWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskUpdateWithoutEnergiesInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutEnergiesInputSchema) ]),
}).strict();

export default TaskUpdateToOneWithWhereWithoutEnergiesInputSchema;
