import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkWhereInputSchema } from './TaskWorkWhereInputSchema';
import { TaskWorkUpdateWithoutEnergyChangesInputSchema } from './TaskWorkUpdateWithoutEnergyChangesInputSchema';
import { TaskWorkUncheckedUpdateWithoutEnergyChangesInputSchema } from './TaskWorkUncheckedUpdateWithoutEnergyChangesInputSchema';

export const TaskWorkUpdateToOneWithWhereWithoutEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkUpdateToOneWithWhereWithoutEnergyChangesInput> = z.object({
  where: z.lazy(() => TaskWorkWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskWorkUpdateWithoutEnergyChangesInputSchema),z.lazy(() => TaskWorkUncheckedUpdateWithoutEnergyChangesInputSchema) ]),
}).strict();

export default TaskWorkUpdateToOneWithWhereWithoutEnergyChangesInputSchema;
