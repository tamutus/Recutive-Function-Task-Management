import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { TaskUpdateWithoutPrivateEnergiesInputSchema } from './TaskUpdateWithoutPrivateEnergiesInputSchema';
import { TaskUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './TaskUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const TaskUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => TaskWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default TaskUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema;
